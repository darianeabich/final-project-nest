/* eslint-disable @typescript-eslint/ban-types */
import { NestResponse } from './nest-response';

export class NestResponseBuilder {
  private response: NestResponse = {
    status: 200,
    headers: {},
    body: {},
  };

  public comStatus(status: number) {
    this.response.status = status;
    return this;
  }

  public comHeaders(headers: Object) {
    this.response.headers = headers;
    return this;
  }

  public comBody(body: Object) {
    this.response.body = body;
    return this;
  }

  public build() {
    return new NestResponse(this.response);
  }
}
