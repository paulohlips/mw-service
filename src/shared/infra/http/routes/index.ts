import Router from 'express';

import coursesRoutes from '@modules/Courses/infra/http/routes/CoursesRoutes';

import disciplineRoutes from '@modules/Disciplines/infra/http/routes/DisciplineRoutes';

const routes = Router();

routes.use('/courses', coursesRoutes);
routes.use('/disciplines', disciplineRoutes);

export default routes;
