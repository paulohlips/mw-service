import { DeleteResult, getRepository, Repository, UpdateResult } from 'typeorm';
import Course from '@modules/Courses/infra/typeorm/entities/Course';
import ICourseRepository from '@modules/Courses/repositories/ICourseRepository';
import ICreateCourseDTO from '@modules/Courses/dtos/ICreateCoursesDTO';
import IUpdateCoursesDTO from '@modules/Courses/dtos/IUpdateCoursesDTO';

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

  public async update(data: IUpdateCoursesDTO): Promise<Course | undefined> {
    await this.ormRepository.update({ id: data.id }, data);

    const course = await this.ormRepository.findOne(data.id);

    return course;
  }

  public async delete(id: string): Promise<DeleteResult> {
    const res = await this.ormRepository.delete(id);

    return res;
  }
}

export default CoursesRepository;
