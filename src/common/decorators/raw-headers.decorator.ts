import {
  createParamDecorator,
  ExecutionContext,
  InternalServerErrorException,
} from '@nestjs/common';

export const RawHeaders = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    const req = ctx.switchToHttp().getRequest();
    const raw = req.rawHeaders;

    if (!raw) {
      throw new InternalServerErrorException('raw not found (request)');
    }

    return !data ? raw : raw[data];
  },
);
