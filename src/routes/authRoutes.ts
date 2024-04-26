import { Router } from 'express';
import { LoginController } from '../controllers/authenticate/login';

const loginController = new LoginController();

const authRoutes = Router();

authRoutes.post('/login', loginController.handle);

export { authRoutes };
