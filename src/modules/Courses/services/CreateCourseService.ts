import { injectable, inject } from 'tsyringe';

import Course from '@modules/Courses/infra/typeorm/entities/Course';
import ICourseRepository from '@modules/Courses/repositories/ICourseRepository';
import AppError from '@shared/errors/AppError';

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
  }: IRequest): Promise<Course | unknown> {
    if (!name || !department) {
      throw new AppError(`Name and department are required.`, 422);
    }

    const courseExists = await this.courseRepository.checkCourseExistence(name);

    if (courseExists) {
      throw new AppError(`Course ${name} has been registered.`, 412);
    }

    const course = this.courseRepository.create({ name, department });

    return course;
  }
}

export default CreateCourseService;
