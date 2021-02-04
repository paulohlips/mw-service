import { container } from 'tsyringe';

import ICourseRepository from '@modules/Courses/repositories/ICourseRepository';
import CourseRepository from '@modules/Courses/infra/typeorm/repositories/CoursesRepository';
import IDisciplineRepository from '@modules/Disciplines/repositories/IDisciplineRepository';
import DisciplineRepository from '@modules/Disciplines/infra/typeorm/repositories/DisciplineRepository';
import IUserRepository from '@modules/Users/repositories/IUserRepository';
import UserRepository from '@modules/Users/infra/typeorm/repositories/UserRepository';

container.registerSingleton<ICourseRepository>(
  'CourseRepository',
  CourseRepository,
);

container.registerSingleton<IDisciplineRepository>(
  'DisciplineRepository',
  DisciplineRepository,
);

container.registerSingleton<IUserRepository>('UserRepository', UserRepository);
