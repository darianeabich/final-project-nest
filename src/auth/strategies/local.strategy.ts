import { MessagesHelpers } from 'src/helpers/messages.helpers';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from '../auth.service';
import { Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      usernameField: 'email',
      passwordField: 'senha',
    });
  }

  async validate(email: string, senha: string): Promise<any> {
    const user = await this.authService.validateUser(email, senha);

    if (!user) {
      throw new UnauthorizedException(
        MessagesHelpers.PASSWORD_OR_EMAIL_INVALID,
      );
    }
    return user;
  }
}
