import { NextFunction, Request, Response } from "express"
import { User } from '../entities/User.entity';
import { createUser,getAllUsers, getUserByName } from '../services/user.service';

interface GetByNameQuery {
  name: string;
}

export const handleGetAllUsers = async(req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await(getAllUsers());
    res.status(201).json({
      status: 'success',
      data: {
        users,
      },
    });
  } catch(err: any) {
    next(err);
  }
};

export const handleCreateUser = async(req: Request<{}, {}, User>, res: Response, next: NextFunction) => {
  try {
    const user = await(createUser(req.body));
    res.status(201).json({
      status: 'success',
      data: {
        user,
      },
    });
  } catch(err: any) {
    next(err);
  };
};

export const handleGetUserByName = async(req: Request<GetByNameQuery, {}, {}>, res: Response, next: NextFunction) => {
  try {
    const user = await getUserByName(req.params.name);
    if (!user) {
      return next(new Error('User with that name not found'));
    }
    res.status(201).json({
      status: 'success',
      data: {
        user,
      },
    });
  } catch(err: any) {
    next(err);
  }
};
