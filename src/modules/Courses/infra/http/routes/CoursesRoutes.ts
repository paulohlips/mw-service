import Router from 'express';

import CoursesController from '@modules/Courses/infra/http/controllers/ListCoursesController';

const coursesRoutes = Router();

coursesRoutes.get('/', CoursesController.index);

coursesRoutes.post('/', CoursesController.create);

coursesRoutes.put('/', CoursesController.update);

coursesRoutes.delete('/', CoursesController.delete);

export default coursesRoutes;
