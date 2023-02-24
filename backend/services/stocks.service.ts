import { Stock } from '../entities/Stock.entity';

import { AppDataSource } from '../data-source';

const stockRepository = AppDataSource.getRepository(Stock);

export const getStockByNameAndDate = async(name: string, date: string) => {
  console.log('in stock svc')
  return await stockRepository.findOneBy({
    name, date
  });
};

export const getAllStocks = async(take: number = 20, skip: number = 1) => {
  // const perPage = take || 20;
  // const toSkip = skip || 0;
  return await stockRepository.find({ take, skip });
};
  // return await stockRepository.createQueryBuilder('stocks').getMany();
  // return await stockRepository.createQueryBuilder('stocks')
  //   .where('stock.name = :name', { name: name })
  //   .getOne();
  
  
  
  // .select('stock').from(Stock, 'stock').where('stock.name = :name', { name: name }).getOne();