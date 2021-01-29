import { injectable, inject } from 'tsyringe';

import Course from '@modules/Courses/infra/typeorm/entities/Course';
import ICourseRepository from '@modules/Courses/repositories/ICourseRepository';

interface IRequest {
  name: string;
  department: string;
}

@injectable()
class CreateCourseService {
  constructor(
    @inject('CourseRepository')
    private courseRepository: ICourseRepository,
  ) {}

  public async execute({
    name,
    department,
  }: IRequest): Promise<Course | string> {
    const courseExists = await this.courseRepository.checkCourseExistence(name);

    if (courseExists) {
      return `Course ${name} has been registered.`;
    }

    const course = this.courseRepository.create({ name, department });

    return course;
  }
}

export default CreateCourseService;
