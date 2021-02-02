import ICreateDisciplineDTO from '@modules/Disciplines/dtos/ICreateDisciplineDTO';
import Discipline from '@modules/Disciplines/infra/typeorm/entities/Discipline';

interface IDisciplineRepository {
  list(): Promise<Discipline[] | undefined>;
  create(data: ICreateDisciplineDTO): Promise<Discipline | undefined>;
  listByCourseId(course_id: string): Promise<Discipline[] | undefined>;
}

export default IDisciplineRepository;
