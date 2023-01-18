import express from 'express';
import { handleGetAllUsers, handleCreateUser, handleGetUserByName } from '../controllers/UserController';

const router = express.Router();

router.route('/').get(handleGetAllUsers);
router.route('/name').get(handleGetUserByName);
router.route('/create').post(handleCreateUser);

export default router;