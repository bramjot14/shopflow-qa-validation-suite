import express from 'express';
import { protect } from '../middleware/authMiddleware.js';
import { createOrder, getOrders, getOrderById } from '../controllers/orderController.js';

const router = express.Router();

router.use(protect);
router.post('/', createOrder);
router.get('/', getOrders);
router.get('/:id', getOrderById);

export default router;
