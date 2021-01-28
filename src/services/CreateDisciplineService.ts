import { getRepository } from 'typeorm';
import Discipline from '../entities/Discipline';

interface Request {
  name: string;
  hours: number;
  course: string;
}

class CreateDisciplineService {
  public async execute({ course, hours, name }: Request) {
    const createDisciplineService = getRepository(Discipline);

    const discipline = createDisciplineService.create({ course, hours, name });

    await createDisciplineService.save(discipline);

    return discipline;
  }
}

export default CreateDisciplineService;
