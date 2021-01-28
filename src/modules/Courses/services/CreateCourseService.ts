import { getRepository, getCustomRepository } from 'typeorm';

import Course from '@modules/Courses/infra/typeorm/entities/Course';
import CoursesRepository from '@modules/Courses/infra/typeorm/repositories/CoursesRepository';

interface Request {
  name: string;
  department: string;
}

class CreateCourseService {
  public async execute({
    name,
    department,
  }: Request): Promise<Course | string> {
    const createCourseService = getRepository(Course);
    const coursesRepository = getCustomRepository(CoursesRepository);

    const courseExists = await coursesRepository.checkCourseExistence(name);

    if (courseExists) {
      return `Course ${name} has been registered.`;
    }

    const course = createCourseService.create({ name, department });

    await createCourseService.save(course);

    return course;
  }
}

export default CreateCourseService;
