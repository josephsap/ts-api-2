import { NextFunction, Request, Response } from 'express';
import { Post } from '../entities/Post.entity';
import { createPortfolio } from '../services/portfolio.service';
import { getUserByName } from '../services/user.service';


interface GetByNameQuery {
  name: string;
}

export const handleCreatePortfolio = async(req: Request<GetByNameQuery, {}, Post>, res: Response, next: NextFunction) => {
  // example url to create a portfolio associated with a user:
  // http://localhost:3000/portfolio/create?name=snoopy
  try {
    const user = await getUserByName(req.params.name);
    const portfolio = await createPortfolio(user!);

    res.status(201).json({
      status: 'success',
      data: {
        portfolio,
      },
    });
    
  } catch(err: any) {
    console.log(err, 'erorr creating portflio');
    next(err);
  }
};