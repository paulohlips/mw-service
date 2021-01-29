import Course from '@modules/Courses/infra/typeorm/entities/Course';
import ICreateCourseDTO from '@modules/Courses/dtos/ICreateCoursesDTO';

interface ICourseRepository {
  checkCourseExistence(name: string): Promise<Course | undefined>;
  create(data: ICreateCourseDTO): Promise<Course>;
  list(): Promise<Course[] | []>;
}

export default ICourseRepository;
