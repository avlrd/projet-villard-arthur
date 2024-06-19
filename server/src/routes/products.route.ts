import { Router } from 'express';

import { get } from '../controllers/products.controller';

const ProductsRouter = Router();

ProductsRouter.get('/', get);

export default ProductsRouter;