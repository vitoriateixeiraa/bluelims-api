import { Router } from 'express';
import { userRoutes } from './userRoutes';
import { authRoutes } from './authRoutes';
import { laboratoryRoutes } from './laboratoryRoutes';
import { inputRoutes } from './inputRoutes';

const routes = Router();

routes.use('/user', userRoutes);
routes.use('/auth', authRoutes);
routes.use('/laboratory', laboratoryRoutes);
routes.use('/input', inputRoutes);


export { routes };
