const { PrismaClient } = require("@prisma/client");

const { sendResponse } = require("../utils/responseHandler");

const prisma = new PrismaClient();

const createProduct = async(req,res)=>{
  try{
    // const { title, description, price, image } = req.body.data;
    console.log(req.body)
    // if (req.user.type === "admin") {
    //   await prisma.item.create({
    //     data: {
    //       name,
    //       description,
    //       price,
    //       image,
    //       discountPrice,
    //       stock,
    //       category: {
    //         connect: { ID: Number(req.query.category_id) },
    //       },
    //     },
    //   });

    //   sendResponse(res, 201);
    // } else {
    //   sendResponse(res, 403);
    // }
  }catch (err) {
    sendResponse(res, 500, err);
  }
}

const uploadImg = async (req, res) => {
  const formData = new FormData();
  formData.append("image", req.body.image);

  try {
    const response = await fetch(
      `https://api.imgbb.com/1/upload?key=${process.env.IMG_BB}`,
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await response.json();

    if (data.data.url) {
      sendResponse(res, 200, data.data.url);
    } else {
      sendResponse(res, 400);
    }
  } catch (error) {
    sendResponse(res, 500, error);
  }
};

const getAllProducts = async(req,res)=>{
  try{
    const products = await prisma.product.findMany();
    if(products){
      sendResponse(res,200,products);
    }else{
      sendResponse(res,401);
    }

    
  }catch (err) {
    sendResponse(res, 500, err);
  }
}

const getProduct = async(req,res)=>{
  try{
    const response = await prisma.item.findUnique({
      where: {
        ID: Number(req.query.item_id),
      },
    });
    if (response.length <= 0) {
      sendResponse(res, 404);
    } else {
      sendResponse(res, 200, response);
    }
  }catch (err) {
    sendResponse(res, 500, err);
  }
}

const deleteProduct = async (req, res) => {
  try {
    if (req.user.type === "admin") {
      const response = await prisma.item.delete({
        where: {
          ID: Number(req.query.item_id),
        },
      });

      sendResponse(res, 200, response);
    } else {
      sendResponse(res, 403);
    }
  } catch (error) {
    sendResponse(res, 500, error);
  }
};

const updateProduct = async (req, res) => {
  try {
    if (req.user.type === "admin") {
      const response = await prisma.item.update({
        where: {
          ID: Number(req.query.item_id),
        },
        data: req.body,
      });

      sendResponse(res, 200, response);
    } else {
      sendResponse(res, 403);
    }
  } catch (error) {
    sendResponse(res, 500, error);
  }
};

const searchProduct = async (req, res) => {
  try {
    const response = await prisma.item.findMany({
      where: {
        name: {
          contains: req.query.key,
        },
      },
    });

    if (response.length <= 0) {
      sendResponse(res, 404);
    } else {
      sendResponse(res, 200, response);
    }
  } catch (error) {
    sendResponse(res, 500, error);
  }
};

const getCategoryItems = async (req, res) => {
  try {
    const response = await prisma.item.findMany({
      where: {
        category: {
          ID: Number(req.query.category_id),
        },
      },
    });

    if (response.length <= 0) {
      sendResponse(res, 404);
    } else {
      sendResponse(res, 200, response);
    }
  } catch (error) {
    sendResponse(res, 500, error);
  }
};





module.exports = {
  createProduct,
  getAllProducts,
  getProduct,
  deleteProduct,
  updateProduct,
  searchProduct,
  getCategoryItems
};