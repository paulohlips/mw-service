import { injectable, inject } from 'tsyringe';
import Discipline from '@modules/Disciplines/infra/typeorm/entities/Discipline';
import IDisciplineRepository from '@modules/Disciplines/repositories/IDisciplineRepository';

@injectable()
class ListDisciplineService {
  constructor(
    @inject('DisciplineRepository')
    private disciplineRepository: IDisciplineRepository,
  ) {}

  public async execute(): Promise<Discipline[] | undefined> {
    const disciplines = await this.disciplineRepository.list();

    return disciplines;
  }
}

export default ListDisciplineService;
