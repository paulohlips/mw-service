import { getRepository, Repository } from 'typeorm';
import Course from '@modules/Courses/infra/typeorm/entities/Course';
import ICourseRepository from '@modules/Courses/repositories/ICourseRepository';
import ICreateCourseDTO from '@modules/Courses/dtos/ICreateCoursesDTO';

class CoursesRepository implements ICourseRepository {
  private ormRepository: Repository<Course>;

  constructor() {
    this.ormRepository = getRepository(Course);
  }

  public async checkCourseExistence(name: string): Promise<Course | undefined> {
    const courseExists = await this.ormRepository.findOne({ name });

    return courseExists || undefined;
  }

  public async create({ name, department }: ICreateCourseDTO): Promise<Course> {
    const appointment = this.ormRepository.create({ name, department });

    await this.ormRepository.save(appointment);

    return appointment;
  }

  public async list(): Promise<Course[]> {
    const courses = await this.ormRepository.find();

    return courses;
  }
}

export default CoursesRepository;
