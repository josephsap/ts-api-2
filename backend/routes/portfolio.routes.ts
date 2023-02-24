import express, { Router } from 'express';
import { handleCreatePortfolio } from '../controllers/PortfolioController';

const router: Router = express.Router();

// router.route('')// get portfolio
router.route('/create').post(handleCreatePortfolio);

export default router;