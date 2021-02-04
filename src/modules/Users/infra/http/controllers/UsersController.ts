import { Request, Response } from 'express';
import { container } from 'tsyringe';
import UserRepository from '@modules/Users/infra/typeorm/repositories/UserRepository';
import CreateUserService from '@modules/Users/services/CreateUserService';
import GenerateTokenService from '@modules/Users/services/GenerateTokenService';

class UsersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const createUser = container.resolve(CreateUserService);

    const { name, email, password } = request.body;

    const user = await createUser.execute({ name, email, password });

    const userWithoutPassword = {
      id: user.id,
      name: user.name,
      email: user.email,
      created_at: user.created_at,
      updated_at: user.updated_at,
    };

    return response.json(userWithoutPassword);

    return response.status(201).json(user);
  }

  public async session(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { email, password } = request.body;

    const authService = container.resolve(GenerateTokenService);

    const user = await authService.execute({ email, password });

    return response.status(201).json(user);
  }
}

export default new UsersController();
