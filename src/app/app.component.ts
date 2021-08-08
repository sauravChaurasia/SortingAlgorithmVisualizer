import { Component } from '@angular/core';
import {Chart} from 'node_modules/chart.js';
import { __await } from 'tslib';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title="SortingAlgorithm"
a=8
sendData;
sendData1;
sendData2;
ngOnInit()
{
  const arrOfNum=[];
    for(let i=0;i<77;i++)
      {arrOfNum.push(this.randomIntFromInterval(5,500));
      }
this.sendData=arrOfNum;
this.sendData1=arrOfNum;

this.sendData2=arrOfNum;


}
randomIntFromInterval(min, max) { // Generating random Values
  return Math.floor(Math.random() * (max - min + 1) + min);
} 
}
