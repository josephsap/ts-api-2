import { NextFunction, Request, Response } from 'express';
import { Stock } from '../entities/Stock.entity';

interface ReqQuery {
  page?: number;
  name?: string;
}

export const handleGetAllStocks = async (req: Request<{}, {}, {}, ReqQuery>, res: Response, next: NextFunction) => {
//  try {
//     const posts = await(getAllStocks());

//     res.status(200).json({
//       status: 'success',
//       data: {
//         posts,
//       },
//     });
//   } catch (err: any) {
//     next(err);
//   }
};