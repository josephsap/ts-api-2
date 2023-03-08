import express, { Router } from 'express';
import { handleGetStockOnDate, handleGetAllStocks, handleListTickers } from '../controllers/StocksController';

const router: Router = express.Router();

router.route('/date').get(handleGetStockOnDate);
router.route('/list').get(handleListTickers);
router.route('/all').get(handleGetAllStocks);

export default router;