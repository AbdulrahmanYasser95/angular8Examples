import { Component, OnInit } from '@angular/core';
import { DataPassingService } from '../service';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

  constructor(private dataPassingService: DataPassingService) { }

  ngOnInit() {
  }

  data = this.dataPassingService.data;
  dataUpdate = this.dataPassingService.dataUpdateEventEmitter.subscribe(
    updatedData => this.data = updatedData
  );
  changeData() {
    this.dataPassingService.updateData('Data from component 2');
    console.log(this.dataPassingService.data);
  }

}
