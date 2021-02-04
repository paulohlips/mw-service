import ICreateUserDTO from '@modules/Users/dtos/ICreateUserDTO';
import User from '@modules/Users/infra/typeorm/entities/User';

interface IUserRepository {
  create(data: ICreateUserDTO): Promise<User>;
  findById(id: string): Promise<User | undefined>;
  findByEmail(email: string): Promise<User | undefined>;
}

export default IUserRepository;
