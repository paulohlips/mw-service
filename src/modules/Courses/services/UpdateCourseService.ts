import { injectable, inject } from 'tsyringe';
import ICourseRepository from '@modules/Courses/repositories/ICourseRepository';
import Course from '@modules/Courses/infra/typeorm/entities/Course';
import { UpdateResult } from 'typeorm';

interface IRequest {
  id: string;
  name?: string;
  department?: string;
}

@injectable()
class UpdateCourseService {
  constructor(
    @inject('CourseRepository')
    private courseRepository: ICourseRepository,
  ) {}

  public async execute({
    id,
    department,
    name,
  }: IRequest): Promise<UpdateResult> {
    const course = await this.courseRepository.update({ id, department, name });

    return course;
  }
}

export default UpdateCourseService;
