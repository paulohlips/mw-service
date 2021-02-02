import { injectable, inject } from 'tsyringe';
import Discipline from '@modules/Disciplines/infra/typeorm/entities/Discipline';
import IDisciplineRepository from '@modules/Disciplines/repositories/IDisciplineRepository';

interface IRequest {
  name: string;
  hours: number;
  course: string;
}

@injectable()
class CreateDisciplineService {
  constructor(
    @inject('DisciplineRepository')
    private disciplineRepository: IDisciplineRepository,
  ) {}

  public async execute({
    course,
    hours,
    name,
  }: IRequest): Promise<Discipline | undefined> {
    const discipline = this.disciplineRepository.create({
      course,
      name,
      hours,
    });

    return discipline;
  }
}

export default CreateDisciplineService;
