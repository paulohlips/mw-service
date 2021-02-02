import { container } from 'tsyringe';

import ICourseRepository from '@modules/Courses/repositories/ICourseRepository';
import CourseRepository from '@modules/Courses/infra/typeorm/repositories/CoursesRepository';
import IDisciplineRepository from '@modules/Disciplines/repositories/IDisciplineRepository';
import DisciplineRepository from '@modules/Disciplines/infra/typeorm/repositories/DisciplineRepository';

container.registerSingleton<ICourseRepository>(
  'CourseRepository',
  CourseRepository,
);

container.registerSingleton<IDisciplineRepository>(
  'DisciplineRepository',
  DisciplineRepository,
);
