import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-gamecontrol',
  templateUrl: './gamecontrol.component.html',
  styleUrls: ['./gamecontrol.component.css']
})
export class GamecontrolComponent implements OnInit {

  @Output() numberReturned = new EventEmitter<{incrementalNumber: number}>();

  counter: number = 0;
  intervalRef;

  constructor() { }

  ngOnInit() {
  }

  onGameStart(){
    this.intervalRef = setInterval(
      () => {
            console.log("Trying to emit");
            this.counter = this.counter + 1;
            this.numberReturned.emit({incrementalNumber: this.counter});
          }
    ,1000);
  }

  onGameStop(){
    console.log("Game Stopped");
    clearInterval(this.intervalRef);
  }

}
