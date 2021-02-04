import { injectable, inject } from 'tsyringe';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import AppError from 'shared/errors/AppError';
import authConfig from '@config/auth';

import User from '@modules/Users/infra/typeorm/entities/User';
import IUserRepository from '@modules/Users/repositories/IUserRepository';

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: User;
  token: string;
}

@injectable()
class GenerateTokenService {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,
  ) {}

  public async execute({
    email,
    password,
  }: IRequest): Promise<IResponse | AppError> {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      return new AppError('Email/Password does not match.', 404);
    }

    const checkUserPassword = await compare(password, user.password);

    if (!checkUserPassword) {
      return new AppError('Email/Password does not match.', 404);
    }

    delete user.password;

    const token = sign({ user }, authConfig.jwt.secret, {
      expiresIn: authConfig.jwt.expiresIn,
    });

    return { user, token };
  }
}

export default GenerateTokenService;
