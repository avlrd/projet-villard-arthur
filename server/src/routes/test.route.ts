import { Router } from 'express'

import testController from '../controllers/test.controller';

const testRouter = Router();

testRouter.get('/1', testController.uno);

export default testRouter