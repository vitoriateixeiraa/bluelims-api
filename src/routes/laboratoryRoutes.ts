import { Router } from 'express';
import { CreateLaboratoryController } from '../controllers/laboratory/create';
import { verifyAuthentication } from '../middlewares/verifyAuthentication';
import { checkUserRole } from '../middlewares/checkUserRole';
import { AddStudentController } from '../controllers/laboratory/add-student';
import { GetAllLaboratoriesController } from '../controllers/laboratory/get-all';
import { GetOneLaboratoryController } from '../controllers/laboratory/get-one';

const createLaboratoryController = new CreateLaboratoryController();
const addStudentController = new AddStudentController();
const getAllLaboratoriesController = new GetAllLaboratoriesController();
const getOneLaboratoryController = new GetOneLaboratoryController();



const laboratoryRoutes = Router();

laboratoryRoutes.post(
  '/',
  verifyAuthentication,
  checkUserRole(['ADMIN']),
  createLaboratoryController.handle
);

laboratoryRoutes.post(
  '/student',
  verifyAuthentication,
  checkUserRole(['USER']),
  addStudentController.handle
);

laboratoryRoutes.get('/', verifyAuthentication, getAllLaboratoriesController.handle);
laboratoryRoutes.get('/:id', verifyAuthentication, getOneLaboratoryController.handle);


export { laboratoryRoutes };
