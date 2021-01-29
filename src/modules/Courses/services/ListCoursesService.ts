import Course from '@modules/Courses/infra/typeorm/entities/Course';
import { injectable, inject } from 'tsyringe';
import ICourseRepository from '@modules/Courses/repositories/ICourseRepository';

@injectable()
class ListCoursesSercice {
  constructor(
    @inject('CourseRepository')
    private courseRepository: ICourseRepository,
  ) {}

  public async execute(): Promise<Course[] | []> {
    const courses = this.courseRepository.list();

    return courses;
  }
}

export default ListCoursesSercice;
