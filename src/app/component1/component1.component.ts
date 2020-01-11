import { Component, OnInit } from '@angular/core';
import { DataPassingService } from '../service';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {

  constructor(private dataPassingService: DataPassingService) { }

  ngOnInit() {
  }

  data = this.dataPassingService.data;
  dataUpdate = this.dataPassingService.dataUpdateEventEmitter.subscribe(
    updatedData => this.data = updatedData
  );

  changeData() {
    this.dataPassingService.updateData('Data from component 1');
    console.log(this.dataPassingService.data);
  }
}
