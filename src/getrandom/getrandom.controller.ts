import { Controller,Logger } from '@nestjs/common';
import {GrpcMethod} from '@nestjs/microservices';
import {GetRandomService} from './getrandom.service';


@Controller('getrandom')
export class GetrandomController {
    private logger = new Logger('AppController');
    constructor(private readonly GetRandomService: GetRandomService) {}

   @GrpcMethod('GetrandomController','getRandom')
  async getRandom(UserName) {
     console.log("username",UserName.data);
     let result = await this.GetRandomService.getRandom(UserName.data);
    console.log("result",result);
    return {data:this.GetRandomService.getRandom(UserName.data)};
  }

}
