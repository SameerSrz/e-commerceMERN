const express = require("express");
const { createProduct , getAllProducts , getProduct } = require("../controllers/productController")

const router = express.Router();

router.post("/create-product", createProduct);
router.get("/get-all-product", getAllProducts);
router.get("get-product", getProduct);

module.exports = router;