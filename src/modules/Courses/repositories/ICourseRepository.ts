import Course from '@modules/Courses/infra/typeorm/entities/Course';
import { DeleteResult } from 'typeorm';

import ICreateCourseDTO from '@modules/Courses/dtos/ICreateCoursesDTO';
import IUpdateCoursesDTO from '@modules/Courses/dtos/IUpdateCoursesDTO';

interface ICourseRepository {
  checkCourseExistence(name: string): Promise<Course | undefined>;
  create(data: ICreateCourseDTO): Promise<Course>;
  list(): Promise<Course[] | []>;
  update(data: IUpdateCoursesDTO): Promise<Course | undefined>;
  delete(id: string): Promise<DeleteResult>;
}

export default ICourseRepository;
