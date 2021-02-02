import { Router } from 'express';

import usersController from '@modules/Users/infra/http/controllers/UsersController';

const usersRoutes = Router();

usersRoutes.post('/', usersController.create);

export default usersRoutes;
