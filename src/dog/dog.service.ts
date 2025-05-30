import { Injectable } from '@nestjs/common';

@Injectable()
export class DogService {
  public getHello(): string {
    return 'WOW!';
  }

  public introduce(): string {
    return 'My name is Misha!';
  }


  public modifyDetail(): string {
    return 'Modified!';
  }

}
