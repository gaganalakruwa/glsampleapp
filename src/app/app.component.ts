import { Component } from '@angular/core';
import { DataService } from './data.service';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
import { stat } from 'fs';

@Component({
    selector: 'app-root',
    template:
        `

    <h1 [class.large-heading]="headingClass">Hellow World !</h1>


      <h1 [ngClass]="headingClasses ">Hellow World ngclass !</h1>

       <h1 [style.color]="headingstyle">Hellow World !</h1>

       <h1 [ngStyle]="headingstyles">Hellow World ngstyle !</h1>
       <h1>{{myProperty}}</h1>

      <p>{{myfruit.type}}</p>

      <ul>
      <li *ngFor="let cars of myCars">{{cars}}</li>

      </ul>

<ul>
      <li *ngIf="myCars">I like my carsds</li>

      <li *ngIf="!myCars">I like my cars</li>

      </ul>

      <img src="{{angularLogo}}">
      <img [src]="angularLogo">
      <img bind-src="angularLogo">

      <button (click)="myEvent($event)">Click Me</button>

      <p [@myAnimation]='state' (click)="animatePara()">Show me the money</p>


      `,
    styles: [`

  h1{

  color:red
  }
  .large-heading{

  font-size:6em;
  }
  .line-under{

  text-decoration: underline;
  }

  p{
      width:480px;
      background:yellow;
      margin:200px auto;
      text-align:center;
      padding:40px;
      font-size:2.5em;

  }


  `],
    animations: [

        trigger('myAnimation', [
            state('little', style({
                transform: 'scale(1)',


            })),

            state('large', style({
                transform: 'scale(1.2)',


            })),
            transition('little<=>large', animate('500ms ease-in')),


        ]),




    ]
})
export class AppComponent {

    myfruit = {
        type: 'apple',
        color: 'green',
        location: 'London'

    };

    myCars = ['nissan', 'rangerower', 'jeep', 'ford'];

    headingClass = false;
    headingClasses = {
        'large-heading': true,
        'line-under': true
    };

    headingstyle = 'green';

    headingstyles = {

        'color': 'brown',
        'font-size': '4em'
    };

    angularLogo = '/assets/image/angylar4.png';
    myevent(event) {
        console.log(event);
    }


    constructor(private dataservice: DataService) {

    }
   // myProperty: string = '';

   // ngOnInit() {
   //     console.log(this.dataservice.myCars);
  //      this.myProperty = this.dataservice.myCars();
   // }


    state: string = 'little';

    animatePara() {
        this.state = (this.state === 'little' ? 'large' : 'little');
    }

}
