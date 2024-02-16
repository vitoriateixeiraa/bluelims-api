import { Router } from 'express';
import { CreateUserController } from '../controllers/user/create';
import { ChangePasswordUserController } from '../controllers/user/change-password';
import { GetOneUserController } from '../controllers/user/get-one';
import { GetAllUsersController } from '../controllers/user/get-all';
import { verifyAuthentication } from '../middlewares/verifyAuthentication';
import { checkUserRole } from '../middlewares/checkUserRole';

const createUserController = new CreateUserController();
const getAllUsersController = new GetAllUsersController();
const getOneUserController = new GetOneUserController();
const changePasswordUserController = new ChangePasswordUserController();

const userRoutes = Router();

userRoutes.post('/', createUserController.handle);
userRoutes.get(
  '/',
  verifyAuthentication,
  checkUserRole(['ADMIN']),
  getAllUsersController.handle
);
userRoutes.get('/:id', getOneUserController.handle);
userRoutes.patch(
  '/change-password/:id',
  verifyAuthentication,
  changePasswordUserController.handle
);

export { userRoutes };
