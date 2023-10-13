import { AiOutlineClose } from "react-icons/ai";
import { BiMinus, BiPlus } from "react-icons/bi";

const CartItem = ({ item }) => {

  return (
    <div className="relative w-full flex flex-row items-center justify-between space-x-5 backdrop-blur-sm bg-white/30 p-3 rounded-lg">
      <AiOutlineClose
        className="w-6 h-6 absolute top-3 left-3 text-white cursor-pointer"
        // onClick={handleRemove}
      />
      {/* Image */}
      <img src={item.image_Url[0].url} alt="item" className="w-24 h-24 rounded-full" />
      {/* Text */}
      <div className="w-full h-full flex flex-col items-start justify-center space-y-3">
        <div className="w-full h-[35%] flex flex-row items-center justify-between">
          <span>{item.name}</span>
          <span>
            <span className="font-bold">Rs.</span> {item.price}
          </span>
        </div>
        {/* Quantity Control */}
        <div className="w-full h-[35%] flex flex-row items-center justify-center rounded-lg text-md">
          <div
            // onClick={handleDecrement}
            className="w-full h-full flex items-center justify-center bg-black text-white rounded-l-lg cursor-pointer"
          >
            <BiMinus />
          </div>
          <div className="w-full h-full font-semibold p-1 text-center">
            {item.quantity}
          </div>
          <div
            // onClick={handleIncrement}
            className="w-full h-full flex items-center justify-center bg-black text-white rounded-r-lg cursor-pointer"
          >
            <BiPlus />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
