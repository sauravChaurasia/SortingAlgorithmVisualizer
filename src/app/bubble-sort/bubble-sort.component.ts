import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bubble-sort',
  templateUrl: './bubble-sort.component.html',
  styleUrls: ['./bubble-sort.component.css']
})
export class BubbleSortComponent implements OnInit {
  @Input()
  arrayToBeSorted;//=[373,265,100,313,378,153,302,409,470,302,496,89,499,465,313,251,374,223,472,227,136,480,367,88,205,379,423,486,425,240,480,252,17,316,315,39,474,212,33,313,64,451,79,356,418,90,46,381,173,386,500,279,416,223,82,497,389,479,259,244,290,109,273,174,99,269,100,383,280,347,95,186,371,463,198,492,232];
  simple:any=[];
  title = 'SortingAlgorithm';
  sortedArray:number[];
  rawData:number[]=[];
  numarr:any=[];
  activeIndex2=0;
  activeIndex1 = 0;
  iSorted:any;  //stores the sorted array after inbuilt sort() method
  sorted=false;  // stores the status whether the array is sorted or not 
  count=0;//counter while checking for equallity
  
 
   ngOnInit()
   {  this.simple=this.arrayToBeSorted;
        console.log("Array :"+ this.simple);
              this.sort(this.setValue());
   }  
  setValue()
  {
    const arrOfNum=[];
    for(let i=0;i<77;i++)
      {arrOfNum.push(this.randomIntFromInterval(5,500));
      }
    return arrOfNum;
  }
  randomIntFromInterval(min, max) { // Generating random Values
    return Math.floor(Math.random() * (max - min + 1) + min);
  }  
  async sort(data){    //Sorting Algorithm
                this.numarr=data;
                for(let i=0;i<this.numarr.length;i++)
                {
                  for(let j=0;j<this.numarr.length-i-1;j++)
                  {
                    if(this.numarr[j]>this.numarr[j+1])
                    {
                      // this.compareLeft = j;
                      this.activeIndex1 = j+2 ;   //this is compared to others
                      this.activeIndex2=j+1;
                      
                      let temp;
                      temp=this.numarr[j];
                      this.numarr[j]=this.numarr[j+1];
                      this.numarr[j+1]=temp;
                      this.sortedArray=this.numarr;
                      this.rawData=this.numarr;
                      // console.log(this.sortedArray);
                      
                    }   await new Promise(r=>setTimeout(r,25));     
                  } 

                }
                this.isSorted(data);
                
                return this.sortedArray;
              }
              isSorted(data)
              { this.iSorted=data.sort((n1,n2) => n1 - n2);
                if(this.iSorted.length==this.sortedArray.length)
                { for(let i=0;i<this.sortedArray.length;i++)
                    {
                      if(this.iSorted[i]==this.sortedArray[i])
                            {this.count++;}
                    }
                  if(this.count==this.sortedArray.length)
                    {
                      this.sorted=true;
                    }
                }
                // console.log(this.sorted)
                // console.log(this.iSorted);

              }
}
