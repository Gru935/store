import express from 'express';
import mongoose from 'mongoose';
import { validateUserCreateMiddleware } from './middlewares/user-middlewares/validate-user-create-middleware.js';
import { userCreateController } from './controllers/user-controllers/user-create-controller.js';
import { authMiddleware } from './middlewares/auth-middlewares/auth-middleware.js';
import { userListController } from './controllers/user-controllers/user-list-controller.js';
import { verifyRoleMiddleware } from './middlewares/user-middlewares/verify-role-middleware.js';
import { userDeleteController } from './controllers/user-controllers/user-delete-controller.js';
import { validateUserDeleteMiddleware } from './middlewares/user-middlewares/validate-user-delete-middleware.js';
import { authController } from './controllers/auth-controllers/auth-controller.js';
import { userEditController } from './controllers/user-controllers/user-edit-controller.js';
import { validateUserEditMiddleware } from './middlewares/user-middlewares/validate-user-edit-middleware.js';
import { validateProductCreateMiddleware } from './middlewares/product-middlewares/validate-product-create-middleware.js';
import { productCreateController } from './controllers/product-controllers/product-create-controller.js';
import { productListController } from './controllers/product-controllers/product-list-controller.js';
import { validateProductEditMiddleware } from './middlewares/product-middlewares/validate-product-edit-middleware.js';
import { productEditController } from './controllers/product-controllers/product-edit-controller.js';
import { validateProductDeleteMiddleware } from './middlewares/product-middlewares/validate-product-delete-middleware.js';
import { productDeleteController } from './controllers/product-controllers/product-delete-controller.js';

const app = express();
app.use(express.json());

// app.post('/users', authMiddleware, verifyRoleMiddleware, validateUserCreateMiddleware, userCreateController);
app.post('/users', validateUserCreateMiddleware, userCreateController);
app.get('/users', authMiddleware, verifyRoleMiddleware, userListController);
app.patch('/users', authMiddleware, verifyRoleMiddleware, validateUserEditMiddleware, userEditController);
app.delete('/users/:id', authMiddleware, verifyRoleMiddleware, validateUserDeleteMiddleware, userDeleteController);

app.post('/products', authMiddleware, verifyRoleMiddleware, validateProductCreateMiddleware, productCreateController);
app.get('/products', authMiddleware, productListController);
app.patch('/products', authMiddleware, verifyRoleMiddleware, validateProductEditMiddleware, productEditController);
app.delete('/products', authMiddleware, verifyRoleMiddleware, validateProductDeleteMiddleware, productDeleteController);

app.post('/auth', authController)

app.listen(3000, () =>{
    console.log('Open 3000');
})