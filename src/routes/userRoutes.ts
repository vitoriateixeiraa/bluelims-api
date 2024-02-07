import { Router } from 'express';
import { CreateUserController } from '../controllers/user/create';
import { ChangePasswordUserController } from '../controllers/user/changePassword';
import { GetOneUserController } from '../controllers/user/getOne';
import { GetAllUsersController } from '../controllers/user/getAll';




const createUserController = new CreateUserController();
const getAllUsersController = new GetAllUsersController();
const getOneUserController = new GetOneUserController();
const changePasswordUserController = new ChangePasswordUserController();


const userRoutes = Router();

userRoutes.post('/', createUserController.handle);
userRoutes.get('/', getAllUsersController.handle);
userRoutes.get('/:id',  getOneUserController.handle);
userRoutes.patch('/change-password/:id', changePasswordUserController.handle);


export { userRoutes };