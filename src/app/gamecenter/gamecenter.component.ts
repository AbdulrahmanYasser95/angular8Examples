import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-gamecenter',
  templateUrl: './gamecenter.component.html',
  styleUrls: ['./gamecenter.component.css']
})
export class GamecenterComponent implements OnInit {

  constructor() {
    this.isCounterRunning = false;
    this.count = 0;
  }

  ngOnInit() {
  }

  isCounterRunning;
  count = 0;
  interval;

  @Output() countUpdate = new EventEmitter<number>();

  startCounter() {
    this.isCounterRunning = true;
    this.interval = setInterval(() => this.incrementCount(), 1000);
  }

  incrementCount() {
    if (this.isCounterRunning) {
      this.count++; console.log(this.count);
      this.countUpdate.emit(this.count);
    }
  }

  pauseCounter() {
    this.isCounterRunning = false;
    clearInterval(this.interval);
  }

}