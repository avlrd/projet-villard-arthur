import { Router } from 'express';
import TestRouter from './test.route';
import AuthRouter from './auth.route';

const EntryPointRouter: Router = Router();

EntryPointRouter.use('/test', TestRouter);
EntryPointRouter.get('/auth', AuthRouter);

export default EntryPointRouter;