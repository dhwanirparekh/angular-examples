import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styles: [`
  .whiteText{
    color: white;
  }
  `]
})
export class UserdetailsComponent implements OnInit {
  
  displayBookingInfo = false;
  displayButtonText = 'Display Booking Info';
  clickArray = [];
  counter=0;

  constructor() { }

  ngOnInit() {
  }

  toggleDisplay() {
   
    this.displayBookingInfo = !this.displayBookingInfo;
    this.displayButtonText = this.displayBookingInfo === true ? 'Hide Booking Info' : 'Display Booking Info';
    this.counter = this.counter + 1;
    this.clickArray.push(this.counter);
    return this.displayBookingInfo;

  }

  getLogBackgroundColor(logCount){
    return logCount > 4 ? 'blue' : 'white';
  }

}
