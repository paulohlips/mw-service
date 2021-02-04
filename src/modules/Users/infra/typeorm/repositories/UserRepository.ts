import { getRepository, Repository } from 'typeorm';
import ICreateUserDTO from '@modules/Users/dtos/ICreateUserDTO';
import User from '@modules/Users/infra/typeorm/entities/User';
import IUserRepository from '@modules/Users/repositories/IUserRepository';

class UserRepository implements IUserRepository {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }

  public async create({
    email,
    name,
    password,
  }: ICreateUserDTO): Promise<User> {
    const user = this.ormRepository.create({ email, name, password });

    await this.ormRepository.save(user);

    return user;
  }

  public async findById(id: string): Promise<User | undefined> {
    const findAppointment = await this.ormRepository.findOne(id);

    return findAppointment;
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    const findAppointment = await this.ormRepository.findOne({
      where: { email },
    });

    return findAppointment;
  }
}

export default UserRepository;
