import React from "react";
import { useParams } from "react-router-dom";
import { productData } from "../Constants";
import { AiOutlineMessage, AiOutlineShoppingCart } from 'react-icons/ai';
import styles from '../Styles/Styles';

const ProductDetail = ({data}) => {
  const [count,setCount] = useState(1);
    // const [click,setClick] = useState(false);
    const [products,setProducts] = useState([]);
    const [select,setSelect] = useState(1)

    const dispatch = useDispatch()

    const incrementCount = () =>{
        setCount(count + 1);
    }
    const decrementCount = () =>{
        if(count > 1){
            setCount(count - 1);
        }
    }
    const handleMassageSubmit = ()=>{
        
        // console.log(data)
        window.open(`https://wa.me/92${data.shop.phoneNumber}`)

    }

  const totalReviewsLength = products && products.reduce((acc, product) => acc + product.reviews.length, 0);

    const totalRatings = products && products.reduce(
        (acc, product) =>
          acc + product.reviews.reduce((sum, review) => sum + review.rating, 0),
        0
      );
      const avg =  totalRatings / totalReviewsLength || 0;

      const averageRating = avg.toFixed(1);

  const handleAddToCart = (id,stock)=>{
    if(stock === 0)
        {
            toast.error("Item out of Stock")
        }else{
              const isItemExist = cart && cart.find((i)=> i._id === id)
              if(isItemExist){
                  toast.error("Item already exits in the cart");
              }else{
                  if(data.stock > count)
                { const cartData = {...data, qty: count}
                  dispatch(addTocart(cartData));
                  toast.success("item added to cart");
                  }else{
                      toast.error("Item stock is limited");
                  }
        }}
  }
  const imageStyle = {
    transition: 'transform 0.3s ease-in-out',
  };

  const handleMouseEnter = (event) => {
    event.target.style.transform = 'scale(1.4)';
  };

  const handleMouseLeave = (event) => {
    event.target.style.transform = 'scale(1)';
  };

  return <div className="bg-white">
  {
      data ? (<>
          <div className={`${styles.section} w-[90%] 800px:w-[80%] h-screen`}>
              <div className="w-full py-5 min-h-[50vh]">
                  <div className="block w-full 800px:flex">
                      <div className='w-full 800px:w-[50%]'>
                      <img src={`${backend_url}//uploads//${data?.images[select]}`} alt="" className='w-[80%]' style={imageStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}/>
                      <div className="w-full flex">
                              <div className={`${select === 0 ? "border" : "null"} cursor-pointer`}>
                                  <img src={`${backend_url}//uploads//${data?.images[0]}`} alt="" 
                                      className='h-[200px]' onClick={()=> setSelect(0)}
                                  />
                              </div>
                              <div className={`${select === 1 ? "border" : "null"} cursor-pointer`}>
                                  <img src={`${backend_url}//uploads//${data?.images[1]}`} alt="" 
                                      className='h-[200px]' onClick={()=> setSelect(1)}
                                  />
                              </div>
                          </div>
                      </div>
                      <div className="w-full 800px:w-[50%] pt-5">
                         <h1 className={`${styles.productTitle}`}>{data.name}</h1>
                         <p className={`${styles.description} mt-6`}>{data.description}</p>
                         <div className="flex pt-3">
                              <h4 className={`${styles.productDiscountPrice}`}>{data.discountPrice}$</h4>
                              <h3 className={`${styles.price}`}>
                                  {data.originalPrice ? data.originalPrice + "$" : data.discountPrice + "$"}
                              </h3>
                         </div>
                         <div className="flex items-center justify-between pr-3 mt-12">
                          <div>
                              <button className="bg-gradient-to-r from-teal-400 to-teal-500 text-white font-bold rounded-l px-4 py-2 shadow-lg hover:opacity-75 transition duration-300 ease-in-out"
                              onClick={decrementCount} >
                                  -
                              </button>
                              <span className='bg-gray-200 text-gray-800 font-medium px-4 py-[11px]'>
                                  {count}
                              </span>
                              <button className="bg-gradient-to-r from-teal-400 to-teal-500 text-white font-bold rounded-l px-4 py-2 shadow-lg hover:opacity-75 transition duration-300 ease-in-out"
                              onClick={incrementCount} >
                                  +
                              </button>
                          </div>
                      </div>
                      <div className={`${styles.button} mt-6 rounded h-11  flex items-center`} onClick={()=>handleAddToCart(data._id,data.stock)} >
                          <span className='text-white flex items-center'>
                              Add to Cart <AiOutlineShoppingCart className='ml-1'/> 
                          </span>
                      </div>
                      <div className="flex items-center pt-8">
                          <Link to={`/shop/${data.shop._id}`}><img src={`${backend_url}//${data.shop.avatar}`} alt="" className='w-[50px] h-[50px] rounded-full mr-2'/></Link>
                          <div>
                              <h3 className={`${styles.shop_name}`}>
                                  {data.shop.shopName}
                              </h3>
                              {/* <h5 className='pb-3 text-[15px]'>
                                  ({data.shop.ratings}) Ratings
                              </h5> */}
                          </div>
                          <div className={`${styles.button} bg-[#6443d1] mt-4 ml-10 rounded h-11`} >
                              <button className='text-white flex items-center' onClick={()=> handleMassageSubmit()}>
                                  Send Message <AiOutlineMessage className='ml-1' />
                              </button> 
                          </div>
                      </div>
                      </div>
                  </div>
                  <div className='min-h[50vh]'>
                      {/* <ProductDetailsInfo data={data} products={products} averageRating={averageRating} totalReviewsLength={totalReviewsLength} /> */}
                  </div>
              {/* <ProductDetailsInfo data={data} products={products} averageRating={averageRating} totalReviewsLength={totalReviewsLength} /> */}
                
              </div>
              {/* <ProductDetailsInfo data={data} products={products} averageRating={averageRating} totalReviewsLength={totalReviewsLength} /> */}
              <br />
              <br />
              {/* <RelatedProducts data={data}/> */}
              <br />
              <br />
          </div>
      </>) : null
  }
</div>
};

export default ProductDetail;
