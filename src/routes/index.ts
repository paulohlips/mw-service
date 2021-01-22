import Router from 'express';

import coursesRoutes from './CoursesRoutes';

const routes = Router();

routes.use('/courses', coursesRoutes);

export default routes;
