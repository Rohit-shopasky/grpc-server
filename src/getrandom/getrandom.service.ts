import { Injectable } from '@nestjs/common';

@Injectable()
export class GetRandomService {
  getRandom(data): string {
      data = Math.random();
    let res = "Hello from App " +data;
    return res;
  }
}
