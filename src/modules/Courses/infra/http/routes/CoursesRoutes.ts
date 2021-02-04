import Router from 'express';

import CoursesController from '@modules/Courses/infra/http/controllers/ListCoursesController';
import ensureAuthenticated from '@shared/infra/http/middlewares/ensureAuthenticated';

const coursesRoutes = Router();

coursesRoutes.get('/', CoursesController.index);

coursesRoutes.use(ensureAuthenticated);

coursesRoutes.post('/', CoursesController.create);

coursesRoutes.put('/', CoursesController.update);

coursesRoutes.delete('/', CoursesController.delete);

export default coursesRoutes;
