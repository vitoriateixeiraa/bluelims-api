import { Router } from 'express';

import { CreateInputController } from '../controllers/input/create';
import { DeleteInputController } from '../controllers/input/delete';
import { GetAllInputController } from '../controllers/input/get-all';
import { GetOneInputController } from '../controllers/input/get-one';
import { UpdateInputController } from '../controllers/input/update';
import { verifyAuthentication } from '../middlewares/verifyAuthentication';
import { checkUserRole } from '../middlewares/checkUserRole';

const createInputController = new CreateInputController();
const deleteInputController = new DeleteInputController();
const getAllInputController = new GetAllInputController();
const getOneInputController = new GetOneInputController();
const updateInputController = new UpdateInputController();

const inputRoutes = Router();

inputRoutes.post('/', verifyAuthentication, createInputController.handle);
inputRoutes.delete('/:id', verifyAuthentication, deleteInputController.handle);
inputRoutes.get('/', verifyAuthentication, getAllInputController.handle);
inputRoutes.get('/:id', verifyAuthentication, getOneInputController.handle);
inputRoutes.put('/:id', verifyAuthentication, updateInputController.handle);

export { inputRoutes };
