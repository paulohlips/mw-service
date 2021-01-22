import { createSecureContext } from 'tls';
import { getRepository } from 'typeorm';

import Course from '../entities/Course';

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

    const courseExists = await createCourseService.findOne({ name });

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
