import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() { }

  cars = ['Toyota', 'Nissan', 'ford'];
  myCars() {

    return 'I love cars';
  }

}
