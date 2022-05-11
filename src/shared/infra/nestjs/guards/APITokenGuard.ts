import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class APITokenGuard implements CanActivate {
  private readonly API_TOKEN: string;

  constructor(private configService: ConfigService) {
    this.API_TOKEN = configService.get('API_TOKEN');
  }

  canActivate(context: ExecutionContext): boolean {
    const ctxHTTP = context.switchToHttp();
    const req = ctxHTTP.getRequest();

    const authorizationHeader = req.headers['authorization'];

    if (!authorizationHeader) throw new UnauthorizedException();

    const [, token] = authorizationHeader.split(' ');

    if (token !== this.API_TOKEN) throw new UnauthorizedException();

    return true;
  }
}
