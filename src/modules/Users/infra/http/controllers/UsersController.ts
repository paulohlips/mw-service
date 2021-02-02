import { Request, Response } from 'express';
import { container } from 'tsyringe';
import UserRepository from '@modules/Users/infra/typeorm/repositories/UserRepository';

class UsersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const createUser = container.resolve(UserRepository);

    const { name, email, password } = request.body;

    const user = await createUser.create({ name, email, password });

    return response.status(201).json(user);
  }
}

export default new UsersController();
