import AuthenticateUserSerive from '@modules/users/services/AuthenticateUserService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

export default class SessionsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const authenticateUser = container.resolve(AuthenticateUserSerive);

    const { user, token } = await authenticateUser.execute({ email, password });

    return response.json({ user: classToClass(user), token });
  }
}
