import express from 'express';
import { handleGetAllStocks } from '../controllers/StocksController';

const router = express.Router();

router.route('/').get(handleGetAllStocks); // limit 50, paginate with query params

export default router;