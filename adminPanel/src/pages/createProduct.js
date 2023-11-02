import React, { useState } from "react";
import toast from "react-hot-toast"
import axios from 'axios'
import { Doughnut, Line, Bar } from "react-chartjs-2";
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { Button } from '@windmill/react-ui'
import ChartCard from "../components/Chart/ChartCard";
import ChartLegend from "../components/Chart/ChartLegend";
import PageTitle from "../components/Typography/PageTitle";
import {
  doughnutOptions,
  lineOptions,
  barOptions,
  doughnutLegends,
  lineLegends,
  barLegends,
} from "../utils/demo/chartsData";
import { server } from "../server";
import { imageToBase64 } from "../utils/helpers";

function Charts() {
  // const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category:"",
    stock: "",
    price: "",
    discountPrice: "",
    images: [],
    type: "user",
  });
  const [confirmPassword, setConfirmPassword] = useState("");
  const [images,setImages] = useState([]);
  const handleImageChange = async(e) => {
    e.preventDefault();
    axios.post(`${server}/products/uploadImg`)
    const base64 = await imageToBase64(e.target.files[0]);
    // let files = Array.from(e.target.files);
    // setFormData({ ...formData, images: (prevImages) => [...prevImages, ...files] })
    // setImages((prevImages) => [...prevImages, ...files]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(formData.stock === 0 || formData.stock < 0)
    {
        toast.error("Stock cannot be 0 or less than 0")
    }else{

    const newForm = new FormData();

    images.forEach((image) => {
      newForm.append("images", image);
    });
    // newForm.append("title", formData.title);
    // newForm.append("description", formData.description);
    // newForm.append("category", formData.category);
    // // newForm.append("tags", tags);
    // newForm.append("originalPrice", formData.orignalPrice);
    // newForm.append("discountPrice", formData.discountPrice);
    // newForm.append("stock", formData.stock);
    // newForm.append("shopId", seller._id);
    // dispatch(createProduct(newForm));
    console.log(formData)
    console.log(images)
    const data = {
      formData,
      images,
    }
    axios.post(`${server}/products/create-product`,formData).then((res)=>{
      if(res){
        toast.success(res.data.message);
        // navigate('/');
      }
    }).catch((err)=>{
      toast.error(err.response.data.message)
    })
}
  };

  return (
    <>
      <PageTitle>Create Product</PageTitle>
      <div className="w-full flex justify-center items-center">
        <div className="w-full min-w-md p-8 space-y-4 rounded-xl bg-white dark:bg-gray-900 dark:text-gray-100 shadow-md">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2 text-sm">
              <label htmlFor="username" className="block dark:text-gray-400">
                Title
              </label>
              <input
                type="text"
                name="title"
                id="tile"
                placeholder="Title"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                required
                className="w-full px-4 py-3 rounded-md border dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:border-violet-400 focus:outline-none"
              />
            </div>
            <div className="space-y-2 text-sm">
              <label htmlFor="username" className="block dark:text-gray-400">
                Description
              </label>
              <textarea
                cols='30'
                rows='8'
                type="text"
                name="description"
                id="description"
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                required
                placeholder="Description"
                className="w-full px-4 py-3 rounded-md border dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:border-violet-400 focus:outline-none"
              />
            </div>
            <div>
                    <label className='pb-2'>
                        Category <span className='text-red-500'>*</span>
                    </label>
                    <select className='w-full mt-2 border h-[35px] rounded-[5px]'
                    value={formData.category}
                    onChange={(e)=> setFormData({...formData, category: e.target.value})}
                    >
                        <option value="Choose a Category">Choose a Category</option>
                        <option value="shoes" key="shoes" >Shoes</option>
                        {/* {
                            categoriesData && categoriesData.map((i) => (
                                <option value={i.title} key={i.title}>{i.title}</option>
                            ))
                        } */}
                    </select>
                </div>
            <div className="space-y-2 text-sm relative">
              <label htmlFor="password" className="block dark:text-gray-400">
                Stock
              </label>
              <input
                type="text"
                name="Stock"
                id="Stock"
                value={formData.stock}
                onChange={(e) =>
                  setFormData({ ...formData, stock: e.target.value })
                }
                required
                placeholder="Stock"
                className="w-full px-4 py-3 rounded-md border dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:border-violet-400 focus:outline-none"
              />
            </div>
            <div className="space-y-2 text-sm relative">
              <label
                htmlFor="confirmPassword"
                className="block dark:text-gray-400"
              >
                Orignal Price
              </label>
              <input
                type="text"
                name="Price"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                required
                id="Price"
                placeholder="Orignal Price"
                className="w-full px-4 py-3 rounded-md border dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:border-violet-400 focus:outline-none"
              />
            </div>
            <div className="space-y-2 text-sm relative">
              <label htmlFor="phoneNumber" className="block dark:text-gray-400">
                Discount Price
              </label>
              <input
                type="text"
                name="discountPrice"
                id="discountPrice"
                value={formData.discountPrice}
                onChange={(e) =>
                  setFormData({ ...formData, discountPrice: e.target.value })
                }
                placeholder="Discount Price"
                className="w-full px-4 py-3 rounded-md border dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:border-violet-400 focus:outline-none"
              />
            </div>
                    <label className='pb-2'>
                       Upload Images <span className='text-red-500'>*</span>
                    </label>
                    <input type="file"
                    name=''
                    id='upload'
                    className='hidden'
                    multiple
                    onChange={handleImageChange} />
                    <br />
                    <div className="w-full flex items-center flex-wrap">
                        <label htmlFor="upload">
                            <AiOutlinePlusCircle size={30} className='mt-3 cursor-pointer' color='#555'/>
                        </label>
                        {
                            images && images.map((i)=>(
                                <img src={URL.createObjectURL(i)} key={i} alt=""
                                className='h-[25%] w-[25%] object-cover m-2' />
                            ))
                        }
                    </div>

            <Button type="submit" className="w-full py-3 text-center rounded-md bg-violet-400 text-white hover:bg-violet-500 transition duration-300 ease-in-out">
              Create Product
            </Button>
          </form>
          {/* ... social login buttons and other content ... */}
        </div>
      </div>

      {/* <div className="grid gap-6 mb-8 md:grid-cols-2">
        <ChartCard title="Doughnut">
          <Doughnut {...doughnutOptions} />
          <ChartLegend legends={doughnutLegends} />
        </ChartCard>

        <ChartCard title="Lines">
          <Line {...lineOptions} />
          <ChartLegend legends={lineLegends} />
        </ChartCard>

        <ChartCard title="Bars">
          <Bar {...barOptions} />
          <ChartLegend legends={barLegends} />
        </ChartCard>
      </div> */}
    </>
  );
}

export default Charts;
