import { NestResponse } from './nest-response';
import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { map, Observable } from 'rxjs';
import { AbstractHttpAdapter, HttpAdapterHost } from '@nestjs/core';

@Injectable()
export class TransfomaInterceptor implements NestInterceptor {
  private httpAdapter: AbstractHttpAdapter;

  constructor(adapterHost: HttpAdapterHost) {
    this.httpAdapter = adapterHost.httpAdapter;
  }

  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<any> | Promise<Observable<any>> {
    return next.handle().pipe(
      map((respostaDoControlador: NestResponse) => {
        if (respostaDoControlador instanceof NestResponse) {
          const contexto = context.switchToHttp();
          const resposta = contexto.getResponse();
          const { headers, status, body } = respostaDoControlador;

          const nomesDosHeaders = Object.getOwnPropertyNames(headers);
          nomesDosHeaders.forEach((nomeDoHeader) => {
            const valorDoHeader = headers[nomeDoHeader];
            this.httpAdapter.setHeader(resposta, nomeDoHeader, valorDoHeader);
          });

          this.httpAdapter.status(resposta, status);
          return body;
        }
        return respostaDoControlador;
      }),
    );
  }
}
