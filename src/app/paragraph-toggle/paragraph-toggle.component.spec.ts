import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParagraphToggleComponent } from './paragraph-toggle.component';

describe('ParagraphToggleComponent', () => {
  let component: ParagraphToggleComponent;
  let fixture: ComponentFixture<ParagraphToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParagraphToggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParagraphToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
