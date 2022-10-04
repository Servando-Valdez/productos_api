import { Router } from "express";
import { ProductController } from "../controllers/product.controller.js";
const productController = new ProductController();
const router = Router();

router.get('/products', productController.getAllProducts);

router.get('/products/:code', productController.getProduct);

router.post('/products', productController.createProduct);

router.patch('/products/:code',productController.updateProduct);

router.delete('/products/:code', productController.DeleteProduct);

export default router;