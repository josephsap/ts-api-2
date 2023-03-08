import type { NextFunction, Request, Response } from 'express';
import { Post } from '../entities/Post.entity';
import { createPost, getAllPosts, getSinglePost, deletePost, updatePost } from '../services/post.service';
import { getUserByName, getPostsByUser } from '../services/user.service';
// import { validate } from 'class-validator';


interface GetByNameQuery {
  name: string;
}

export const handleCreatePost = async(req: Request<GetByNameQuery, {}, Post>, res: Response, next: NextFunction) => {
  // example url to create a post associated with a user:
  // http://localhost:3000/api/posts/create?name=snoopy
  try {
    const user = await getUserByName(req.params.name);
    const post = await createPost(req.body, user!);
    // const errors = await validate(post);
    res.status(201).json({
      status: 'success',
      data: {
        post,
      },
    });
    // if (errors.length > 0) {
    //   throw 400;
    // } else {
    //   res.status(201).json({
    //     status: 'success',
    //     data: {
    //       post,
    //     },
    //   });
    // }
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

export const handleGetPostsByUser = async(req: Request<GetByNameQuery, {}, {}>, res: Response, next: NextFunction) => {
  try {
    const user = await getUserByName(req.params.name);
    if (!user) {
      return next(new Error('User not found.'));
    }
    
    const posts = await getPostsByUser(user.id);

    res.status(201).json({
      status: 'success',
      data: {
        posts,
      },
    });
  } catch(err: any) {
    next(err);
  }
};