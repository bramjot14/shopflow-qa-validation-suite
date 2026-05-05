import express from 'express';
import { protect, adminOnly } from '../middleware/authMiddleware.js';
import { getAllOrders, updateOrderStatus } from '../controllers/adminController.js';

const router = express.Router();

router.use(protect, adminOnly);
router.get('/orders', getAllOrders);
router.patch('/orders/:id/status', updateOrderStatus);

export default router;
