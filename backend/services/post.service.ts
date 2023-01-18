import { Post } from '../entities/Post.entity';
import { User } from '../entities/User.entity';
import { AppDataSource } from '../data-source';

const postRepository = AppDataSource.getRepository(Post);

export const createPost = async (input: Partial<Post>, user: User) => {
  return await postRepository.save(postRepository.create({ ...input, user }));
};

export const getAllPosts = async () => {
  return await postRepository.find();
};

export const getSinglePost = async (postId: string) => {
  return await postRepository.findOneBy({ id: postId });
};

export const deletePost = async (postId: string) => {
  return await postRepository.delete(postId);
}

export const updatePost = async(input: Partial<Post>) => {
  return await postRepository.save({...input});
};
