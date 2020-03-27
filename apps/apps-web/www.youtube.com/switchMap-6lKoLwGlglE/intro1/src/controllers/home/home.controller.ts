import * as express from 'express';
import { Request, Response } from 'express';
import IControllerBase from 'src/interfaces/IControllerBase.interface';

class HomeController implements IControllerBase {
  public path = '/';
  public router = express.Router();

  constructor() {
    this.initRoutes();
  }

  public initRoutes() {
    this.router.get('/', this.index);
  }

  index = (req: Request, res: Response) => {
    res.sendFile('index.html', { root: './src/views/home' });
    // res.render('home/index', { users });
  };
}

export default HomeController;
