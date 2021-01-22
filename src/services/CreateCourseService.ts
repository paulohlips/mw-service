import { createSecureContext } from 'tls';
import { getRepository, getCustomRepository } from 'typeorm';

import Course from '../entities/Course';
import CoursesRepository from '../repositories/CoursesRepository';

interface Request {
  name: string;
  department: string;
}

class CreateCourseService {
  public async execute({
    name,
    department,
  }: Request): Promise<Course> | string {
    const createCourseService = getRepository(Course);
    const coursesRepository = getCustomRepository(CoursesRepository);

    const courseExists = await coursesRepository.checkCourseExistense(name);

    console.log(courseExists);

    if (courseExists) {
      return `Course ${name} has been registered.`;
    }

    const course = createCourseService.create({ name, department });

    await createCourseService.save(course);

    return course;
  }
}

export default CreateCourseService;
