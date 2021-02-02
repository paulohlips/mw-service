import Router from 'express';

import coursesRoutes from '@modules/Courses/infra/http/routes/CoursesRoutes';
import disciplinesRoutes from '@modules/Disciplines/infra/http/routes/DisciplineRoutes';
import usersRoutes from '@modules/Users/infra/http/routes/UsersRoutes';

const routes = Router();

routes.use('/courses', coursesRoutes);
routes.use('/disciplines', disciplinesRoutes);
routes.use('/users', usersRoutes);

export default routes;
