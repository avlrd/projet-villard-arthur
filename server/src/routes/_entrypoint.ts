import { Router } from 'express';
import TestRouter from './test.route';

const entryPointRouter: Router = Router();

entryPointRouter.use('/test', TestRouter);

export default entryPointRouter;