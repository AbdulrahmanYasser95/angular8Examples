import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paragraph-toggle',
  templateUrl: './paragraph-toggle.component.html',
  styleUrls: ['./paragraph-toggle.component.css']
})
export class ParagraphToggleComponent implements OnInit {

  constructor() { 
    this.parargraphVisible = true;
    this.toggleCount = 0;
  }

  ngOnInit() {
  }

  parargraphVisible;
  toggleCount;

  toggleParagraphVisibility(){
    this.parargraphVisible = !this.parargraphVisible;
    this.toggleCount++;
  }

  func(){
    console.log('test');
  }

}
