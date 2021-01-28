import Router from 'express';

import coursesRoutes from './CoursesRoutes';
import disciplineRoutes from './DisciplineRoutes';

const routes = Router();

routes.use('/courses', coursesRoutes);
routes.use('/disciplines', disciplineRoutes);

export default routes;
