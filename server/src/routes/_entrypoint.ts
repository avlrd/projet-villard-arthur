import { Router } from 'express';
import TestRouter from './test.route';
import AuthRouter from './auth.route';
import ProductsRouter from './products.route';

const EntryPointRouter: Router = Router();

EntryPointRouter.use('/test', TestRouter);
EntryPointRouter.use('/auth', AuthRouter);
EntryPointRouter.use('/products', ProductsRouter);

export default EntryPointRouter;