import express from 'express';
import { handleCreatePost, handleGetAllPosts, handleGetSinglePost, handleDeletePost, handleUpdatePost } from '../controllers/PostController';

const router = express.Router();

router.route('/:id').get(handleGetSinglePost);
router.route('/').get(handleGetAllPosts);
router.route('/create').post(handleCreatePost);
router.route('/:id').delete(handleDeletePost);
router.route('/update/:id').patch(handleUpdatePost);

export default router;