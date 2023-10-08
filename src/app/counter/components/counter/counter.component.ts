
import { Component  } from '@angular/core';

@Component({
    selector: 'app-counter',
    template: `
        <h3>Counter: {{counter}}</h3>

            <button (click)="incrementarPor(-1)">-1</button>
            <button (click)="resetCounter()">Reset</button>
            <button (click)="incrementarPor(+1)">+1</button>

    `
})
export class CounterComponent{
    public title: string = 'HOLA COUNTER';
    public counter: number = 10;

    constructor() { }


  incrementarPor(value : number):void{
      this.counter += value;
  }

  resetCounter():void{
    this.counter = 10;
  }
}


