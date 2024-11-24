import express from "express";
const router = express.Router();
import { 
    getProducts,
    getProductById, 
    createProduct,
    updateProduct,
    deleteProduct,
    createProductReview,
    getTopProducts,
    getProducts1,
} from '../controllers/productController.js';
import { protect, admin } from '../middleware/authMiddleware.js';
import checkObjectId from '../middleware/checkObjectId.js';

router.route('/').get(getProducts).post(protect, admin, createProduct);
router.route('/getProducts1').get(protect, admin, getProducts1);
router.route('/:id/reviews').post(protect, checkObjectId, createProductReview);
router.get('/top',getTopProducts);
router
    .route('/:id')
    .get(checkObjectId, getProductById)
    .put(protect, admin, checkObjectId, updateProduct)
    .delete(protect, admin, checkObjectId, deleteProduct);

export default router;