import { AiOutlineClose } from "react-icons/ai";
import { toast, Toaster } from "react-hot-toast";
import CartItem from "./CartItem";
import { orderItems } from "../Constants";
import { useEffect, useState } from "react";

const Cart = ({ isActive, setIsActive }) => {
  
  let total = 0;
  const [items, setItems] = useState([]);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("cartItems")); // Use a different variable name here
    if (storedItems) {
      setItems(storedItems); // Update the state with the parsed items
    }
    handleTotal();
  }, []); // Empty dependency array means this effect runs once when the component mounts
  const handleTotal = ()=>{
    items.map((item)=>{
      total = total + item.price;
    })
  }

  if (isActive) {
    return (
      <>
        <Toaster />
        {items.length !== 0 ? (
          <div className="fixed top-4 right-0 z-50 w-[32%] border border-red-500 h-[95%] shadow-xl backdrop-blur-sm bg-black/30 rounded-lg m-2 flex flex-col items-start justify-between delay-150 ease-in-out text-white overflow-y-scroll">
            <div className="w-full p-5 flex flex-row items-center justify-between">
              <h1 className="w-full text-3xl font-semibold">Your Cart</h1>
              <AiOutlineClose
                className="w-8 h-8 cursor-pointer"
                onClick={() => setIsActive(false)}
              />
            </div>
            {items.length !== 0 && (
              <div className="w-full h-[35%] p-5 flex flex-col items-center justify-center space-y-3">
                {items.map((item, idx) => (
                  <CartItem key={idx} item={item} />
                ))}
                <div className="w-full flex flex-row items-center justify-between">
                  <span className="w-full text-center text-lg font-bold">
                    Grand Total: Rs.{total}
                  </span>
                  <button
                    type="button"
                    // onClick={handleOrder}
                    className="w-full px-5 py-3 text-white font-semibold rounded-lg bg-red-600 flex flex-row items-center justify-center space-x-3"
                  >
                    <span>Checkout</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="fixed top-4 right-0 z-50 w-[25%] h-[95%] shadow-xl backdrop-blur-sm bg-black/30 rounded-lg m-2 flex flex-col items-center justify-center delay-150 ease-in-out text-white overflow-y-scroll">
            <p className="text-lg font-bold">Bhook Ni Lagi Kya ? 🥺</p>
            <AiOutlineClose
              className="w-8 h-8 cursor-pointer absolute top-3 right-3"
              onClick={() => setIsActive(false)}
            />
          </div>
        )}
      </>
    );
  }
};

export default Cart;
