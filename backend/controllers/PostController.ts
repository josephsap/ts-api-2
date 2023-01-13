import { NextFunction, Request, Response } from 'express';
import { Post } from '../entities/Post.entity';
import { createPost, getAllPosts, getSinglePost, deletePost, updatePost } from '../services/post.service';

export const handleCreatePost = async(req: Request<{}, {}, Post>, res: Response, next: NextFunction) => {
  try {
    const post = await createPost(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        post,
      },
    });
  } catch(err: any) {
    console.log(err, 'erorr creating post');
    next(err);
  }
};

export const handleGetAllPosts = async(req: Request, res: Response, next: NextFunction) => {
  try {
    const posts = await(getAllPosts());

    res.status(200).json({
      status: 'success',
      data: {
        posts,
      },
    });
  } catch (err: any) {
    next(err);
  }
};

export const handleGetSinglePost = async(req: Request, res: Response, next: NextFunction) => {
  try {
    const post = await(getSinglePost(req.params.id));
    if (!post) {
      return next(new Error('Post with that ID not found'));
    }
    res.status(200).json({
      status: 'success',
      data: { post },
    });
  } catch(err: any) {
    next(err);
  }
};

export const handleDeletePost = async(req: Request, res: Response, next: NextFunction) => {
  try {
    const results = await deletePost(req.params.id);
    res.send(results);

  } catch(err: any) {
    console.log(err.message);
    next(err);
  }
};

export const handleUpdatePost = async(req: Request, res: Response, next: NextFunction) => {
  try {
    const post = await(getSinglePost(req.params.id));
    if (!post) {
      return next(new Error('Post with that ID not found'));
    }

    const updatedPost = await updatePost({...post, ...req.body});
    
    res.status(200).json({
      status: 'success',
      data: {
        updatedPost,
      },
    });
  } catch(err: any) {
    console.log(err.message);
    next(err);
  }
};