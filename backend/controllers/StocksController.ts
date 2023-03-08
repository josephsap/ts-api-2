import { NextFunction, Request, Response } from 'express';
// import { Stock } from '../entities/Stock.entity';
import { getStockByNameAndDate, getAllStocks, listTickers } from '../services/stocks.service';

interface StockSymbolReqQuery {
  name: string;
  date: string;
}

interface PaginateQuery {
  take?: number;
  skip?: number;
}

export const handleGetStockOnDate = async (req: Request<{}, {}, {},  StockSymbolReqQuery>, res: Response, next: NextFunction) => {
 try {
    const stock = await(getStockByNameAndDate(req.query.name, req.query.date));
    res.status(200).json({
      status: 'success',
      data: {
        stock,
      },
    });
  } catch (err: any) {
    next(err);
  }
};

export const handleGetAllStocks = async(req: Request<{}, {}, {},  PaginateQuery>, res: Response, next: NextFunction) => {
  try {
    const stocks = await getAllStocks(req.query.take, req.query.skip);
     res.status(200).json({
      status: 'success',
      data: {
        stocks,
      },
    });
  } catch (err: any) {
    next(err);
  }
}

export const handleListTickers = async(req: Request<{}, {}, {},  PaginateQuery>, res: Response, next: NextFunction) => {
  try {
    const stocks = await listTickers(req.query.take, req.query.skip);
    // need to remove duplicates then send. data should be array of tickers.
     res.status(200).json({
      status: 'success',
      data: {
        stocks,
      },
    });
  } catch (err: any) {
    next(err);
  }

};