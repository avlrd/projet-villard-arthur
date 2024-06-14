import { Router } from 'express'

import testController from '../controllers/test.controller';

const TestRouter = Router();

TestRouter.get('/', testController.uno);

export default TestRouter;