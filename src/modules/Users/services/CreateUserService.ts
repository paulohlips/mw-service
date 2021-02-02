import { injectable, inject } from 'tsyringe';
import IUserRepository from '@modules/Users/repositories/IUserRepository';
import ICreateUserDTO from '@modules/Users//dtos/ICreateUserDTO';
import User from '@modules/Users/infra/typeorm/entities/User';

@injectable()
class CreateUserService {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,
  ) {}

  public async execute({
    email,
    name,
    password,
  }: ICreateUserDTO): Promise<User> {
    const user = this.userRepository.create({ email, name, password });

    return user;
  }
}

export default CreateUserService;
