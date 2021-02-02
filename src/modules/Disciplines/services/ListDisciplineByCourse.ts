import { inject, injectable } from 'tsyringe';
import IDisciplineRepository from '@modules/Disciplines/repositories/IDisciplineRepository';
import Discipline from '@modules/Disciplines/infra/typeorm/entities/Discipline';

@injectable()
class ListDisciplineByCourseService {
  constructor(
    @inject('DisciplineRepository')
    private disciplineRepository: IDisciplineRepository,
  ) {}

  public async execute(course_id: string): Promise<Discipline[] | undefined> {
    const disciplines = await this.disciplineRepository.listByCourseId(
      course_id,
    );

    return disciplines;
  }
}

export default ListDisciplineByCourseService;
