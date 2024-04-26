import { Router } from 'express';
import { CreateLaboratoryController } from '../controllers/laboratory/create';
import { verifyAuthentication } from '../middlewares/verifyAuthentication';
import { checkUserRole } from '../middlewares/checkUserRole';
import { AddStudentController } from '../controllers/laboratory/add-student';
import { GetAllLaboratoriesController } from '../controllers/laboratory/get-all';
import { GetOneLaboratoryController } from '../controllers/laboratory/get-one';
import { UpdateLaboratoryController } from '../controllers/laboratory/update';
import { DeleteLaboratoryController } from '../controllers/laboratory/delete';

const createLaboratoryController = new CreateLaboratoryController();
const addStudentController = new AddStudentController();
const getAllLaboratoriesController = new GetAllLaboratoriesController();
const getOneLaboratoryController = new GetOneLaboratoryController();
const updateLaboratoryController = new UpdateLaboratoryController();
const deleteLaboratoryController = new DeleteLaboratoryController();


const laboratoryRoutes = Router();

laboratoryRoutes.post(
  '/',
  verifyAuthentication,
  checkUserRole(['ADMIN']),
  createLaboratoryController.handle
);

laboratoryRoutes.patch(
  '/student',
  verifyAuthentication,
  checkUserRole(['USER']),
  addStudentController.handle
);

laboratoryRoutes.get(
  '/',
  verifyAuthentication,
  getAllLaboratoriesController.handle
);
laboratoryRoutes.get(
  '/:id',
  verifyAuthentication,
  getOneLaboratoryController.handle
);

laboratoryRoutes.put(
  '/:id',
  verifyAuthentication,
  checkUserRole(['ADMIN']),
  updateLaboratoryController.handle
);

laboratoryRoutes.delete(
  '/:id',
  verifyAuthentication,
  checkUserRole(['ADMIN']),
  deleteLaboratoryController.handle
);

export { laboratoryRoutes };
