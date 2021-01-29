import { injectable, inject } from 'tsyringe';
import ICourseRepository from '@modules/Courses/repositories/ICourseRepository';
import { DeleteResult } from 'typeorm';

@injectable()
class DeleteCourseService {
  constructor(
    @inject('CourseRepository')
    private courseRepository: ICourseRepository,
  ) {}

  public async execute(id: string): Promise<DeleteResult> {
    const course = await this.courseRepository.delete(id);

    return course;
  }
}

export default DeleteCourseService;
