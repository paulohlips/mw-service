import { Request, Response, Router } from 'express';
import { getRepository } from 'typeorm';
import DisciplineService from '@modules/Disciplines/services/CreateDisciplineService';
import Discipline from '@modules/Disciplines/infra/typeorm/entities/Discipline';
import DisciplinesController from '@modules/Disciplines/infra/http/controllers/DisciplinesController';

const disciplineRoutes = Router();

disciplineRoutes.get('/', DisciplinesController.index);

disciplineRoutes.post('/', DisciplinesController.create);

export default disciplineRoutes;
