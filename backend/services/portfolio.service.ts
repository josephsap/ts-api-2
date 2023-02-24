import { Portfolio } from '../entities/Portfolio.entity';
import { User } from '../entities/User.entity';
import { AppDataSource } from '../data-source';

const portfolioRepository = AppDataSource.getRepository(Portfolio);

export const createPortfolio = async (user: User) => {
  return await portfolioRepository.save(portfolioRepository.create({ user }));
};
