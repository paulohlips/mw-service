import { Router } from 'express';
import DisciplinesController from '@modules/Disciplines/infra/http/controllers/DisciplinesController';

const disciplineRoutes = Router();

disciplineRoutes.get('/', DisciplinesController.index);

disciplineRoutes.post('/', DisciplinesController.create);

disciplineRoutes.get('/:course_id', DisciplinesController.show);

export default disciplineRoutes;
