import { User } from '../entities/User.entity';
import { AppDataSource } from '../data-source';

const userRepository = AppDataSource.getRepository(User);

export const getAllUsers = async () => {
  return await userRepository.find();
};

export const createUser = async (input: Partial<User>) => {
  return await userRepository.save(userRepository.create({
    ...input
  }));
}

export const getUserByName = async(name: string) => {
  return await userRepository.findOneBy({ name });
}

export const getPostsByUser = async (userId: string) => {
  return await userRepository.find({
    where: {
      id: userId
    },
    relations: {
      posts: true
    }
  });
};