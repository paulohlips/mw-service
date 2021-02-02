import { getRepository, Repository } from 'typeorm';
import ICreateUserDTO from '@modules/Users/dtos/ICreateUserDTO';
import User from '@modules/Users/infra/typeorm/entities/User';
import IUserRepository from '@modules/Users/repositories/IUserRepository';

class UserRepository implements IUserRepository {
  private ormRespository: Repository<User>;

  constructor() {
    this.ormRespository = getRepository(User);
  }

  public async create({
    email,
    name,
    password,
  }: ICreateUserDTO): Promise<User> {
    const user = this.ormRespository.create({ email, name, password });

    await this.ormRespository.save(user);

    return user;
  }
}

export default UserRepository;
