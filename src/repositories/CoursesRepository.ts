import { getRepository, EntityRepository } from 'typeorm';
import Course from '../entities/Course';

@EntityRepository('courses')
class CoursesRepository {
  public async checkCourseExistense(name: string): Promise<Course | undefined> {
    const coursesRepository = getRepository(Course);
    const courseExists = await coursesRepository.findOne({ name });

    return courseExists || undefined;
  }
}

export default CoursesRepository;
