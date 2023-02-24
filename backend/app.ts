import * as bodyParser from "body-parser"
import express, { Express, Request, Response } from "express"
import { AppDataSource } from "./data-source"
import postRouter from './routes/post.routes';
import portfolioRouter from './routes/portfolio.routes';
import usersRouter from './routes/users.routes';
import stocksRouter from './routes/stocks.routes';

AppDataSource.initialize().then(async () => {

    const app: Express = express();
    app.use(bodyParser.json());

    // start express server
    app.listen(3000);

    app.get('/', (req: Request, res: Response) => {
      res.send('hi');
    });

    app.use('/stocks', stocksRouter);
    app.use('/api/posts', postRouter);
    app.use('/users', usersRouter);
    app.use('/portfolio', portfolioRouter);
    // await AppDataSource.manager.save(
    //     AppDataSource.manager.create(User, {
    //         firstName: "2345pppTimber",
    //         lastName: "Saw",
    //         age: 27
    //     })
    // )

    console.log("Express server has started on port 3000.")

}).catch(error => console.log(error))
