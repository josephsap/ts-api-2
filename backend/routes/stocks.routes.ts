import express, { Router } from 'express';
import { handleGetStockOnDate, handleGetAllStocks } from '../controllers/StocksController';

const router: Router = express.Router();

router.route('/').get(handleGetStockOnDate); 
router.route('/all').get(handleGetAllStocks);

export default router;