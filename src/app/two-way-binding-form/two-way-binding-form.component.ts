import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding-form',
  templateUrl: './two-way-binding-form.component.html',
  styleUrls: ['./two-way-binding-form.component.css']
})
export class TwoWayBindingFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  name = 'Test'

  disableResetButtonForEmptyNameInput(){
    if (this.name === ''){
      return true;
    }
    else{
      return false;
    }
  };

  resetName(){
    this.name = '';
  }

}
