import { container } from 'tsyringe';

import ICourseRepository from '@modules/Courses/repositories/ICourseRepository';
import CourseRepository from '@modules/Courses/infra/typeorm/repositories/CoursesRepository';

container.registerSingleton<ICourseRepository>(
  'CourseRepository',
  CourseRepository,
);
