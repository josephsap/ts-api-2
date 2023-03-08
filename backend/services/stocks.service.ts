import { Stock } from '../entities/Stock.entity';

import { AppDataSource } from '../data-source';

const stockRepository = AppDataSource.getRepository(Stock);

export const getStockByNameAndDate = async(name: string, date: string) => {
  return await stockRepository.findOne({
    where: {
      name: name.toUpperCase(),
      date: date
    },
  });
};

export const getAllStocks = async(take: number = 20, skip: number = 1) => {
  return await stockRepository.find({ take, skip });
};

export const listTickers = async(take: number = 50, skip: number = 1) => {
  return await stockRepository.createQueryBuilder('stock')
    .select(['stock.name'])
    // .skip(skip)
    // .take(take)
    .getMany();
};