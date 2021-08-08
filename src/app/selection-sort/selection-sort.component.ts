import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-selection-sort',
  templateUrl: './selection-sort.component.html',
  styleUrls: ['./selection-sort.component.css']
})
export class SelectionSortComponent implements OnInit {
 @Input()
  arrayToBeSorted//=[373,265,100,313,378,153,302,409,470,302,496,89,499,465,313,251,374,223,472,227,136,480,367,88,205,379,423,486,425,240,480,252,17,316,315,39,474,212,33,313,64,451,79,356,418,90,46,381,173,386,500,279,416,223,82,497,389,479,259,244,290,109,273,174,99,269,100,383,280,347,95,186,371,463,198,492,232];
  simple;
  sortedArray:number[];
  rawData:number[]=[];
  numarr:any=[];
  activeIndex2=0;
  activeIndex1 = 0;
  min_ind;  
  iSorted:any;  //stores the sorted array after inbuilt sort() method
  sorted=false;  // stores the status whether the array is sorted or not 
  count=0;//counter while checking for equallity

   ngOnInit()
   { this.simple=this.arrayToBeSorted; 
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
                  this.min_ind=i;
                  for(let j=i+1;j<this.numarr.length;j++)
                  {
                    if(this.numarr[j]<this.numarr[this.min_ind])
                    {
                      // this.compareLeft = j;
                      this.activeIndex1 = i ;   //this is compared to others
                      this.activeIndex2=j;
                      this.min_ind=j;
                    } await new Promise(r=>setTimeout(r,25));
                     
                      // console.log("Selection: "+this.sortedArray);
                      
                          
                  }
                   let temp;
                      temp=this.numarr[i];
                      this.numarr[i]=this.numarr[this.min_ind];
                      this.numarr[this.min_ind]=temp;
                      this.sortedArray=this.numarr;
                      this.rawData=this.numarr; 
                      

                }
                console.log("Selection3: "+this.sortedArray);
                this.isSorted(data);
                
                return this.sortedArray;
              }
              isSorted(data)
              { this.iSorted=data.sort((n1,n2) => n1 - n2);
                console.log("Selection check 4:"+this.iSorted);
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
                console.log("Selection check1: "+this.sorted)
                console.log("Selection check 2:"+this.iSorted);

              }
}
