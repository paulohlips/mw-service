import ICreateDisciplineDTO from '@modules/Disciplines/dtos/ICreateDisciplineDTO';
import IDisciplineRepository from '@modules/Disciplines/repositories/IDisciplineRepository';
import { getRepository, Repository } from 'typeorm';
import Discipline from '@modules/Disciplines/infra/typeorm/entities/Discipline';

class DisciplineRepository implements IDisciplineRepository {
  private ormRepository: Repository<Discipline>;

  constructor() {
    this.ormRepository = getRepository(Discipline);
  }

  public async list(): Promise<Discipline[] | undefined> {
    const disciplines = await this.ormRepository.find();

    return disciplines;
  }

  public async create({
    course,
    hours,
    name,
  }: ICreateDisciplineDTO): Promise<Discipline | undefined> {
    const discipline = this.ormRepository.create({ course, hours, name });

    await this.ormRepository.save(discipline);
    return discipline;
  }

  public async listByCourseId(
    course_id: string,
  ): Promise<Discipline[] | undefined> {
    const id = course_id.toString();
    const disciplines = await this.ormRepository.find({
      where: { course_id: id },
    });

    return disciplines;
  }
}

export default DisciplineRepository;
