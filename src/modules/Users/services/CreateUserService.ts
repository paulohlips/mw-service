import { injectable, inject } from 'tsyringe';
import { hash } from 'bcryptjs';
import AppError from '@shared/errors/AppError';

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
  }: ICreateUserDTO): Promise<User | AppError> {
    const userExists = await this.userRepository.findByEmail(email);

    if (userExists) {
      return new AppError('User already exists', 401);
    }

    const hashedPassword = await hash(password, 8);

    const user = this.userRepository.create({
      email,
      name,
      password: hashedPassword,
    });

    return user;
  }
}

export default CreateUserService;
