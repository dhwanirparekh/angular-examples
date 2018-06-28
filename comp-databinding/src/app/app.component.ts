import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  title = 'Component Databinding';

  OnNumberReturned(numReturned: {incrementalNumber: number}){
    
    console.log("Now counter is:" + numReturned.incrementalNumber);
    if(numReturned.incrementalNumber%2 === 0){
      this.evenNumbers.push(numReturned.incrementalNumber);
    }else{
      this.oddNumbers.push(numReturned.incrementalNumber);
    }
  }

}
