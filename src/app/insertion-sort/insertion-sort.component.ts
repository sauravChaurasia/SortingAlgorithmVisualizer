import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-insertion-sort',
  templateUrl: './insertion-sort.component.html',
  styleUrls: ['./insertion-sort.component.css']
})
export class InsertionSortComponent implements OnInit {

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
   {    
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
                for(let i=1;i<this.numarr.length;i++)
                {
                  let key=this.numarr[i];
                  let j=i-1;
                 
                  while(j>=0 && this.numarr[j]>key)
                  {
                    this.activeIndex1 = key ;   //this is compared to others
                    this.activeIndex2=j;
                    this.numarr[j+1]=this.numarr[j];
                    j--;
                  }await new Promise(r=>setTimeout(r,25));
                  this.numarr[j+1]=key;
                  // this.sortedArray=this.numarr;
                }
                 
                 this.sortedArray=this.numarr;
                this.isSorted(data);
                this.rawData=this.sortedArray;
                console.log("Insertion Size: "+this.sortedArray);
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
                console.log("Inserion"+this.sorted);
                console.log(this.iSorted);

              }

}
