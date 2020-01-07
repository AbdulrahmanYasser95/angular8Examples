import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoWayBindingFormComponent } from './two-way-binding-form.component';

describe('TwoWayBindingFormComponent', () => {
  let component: TwoWayBindingFormComponent;
  let fixture: ComponentFixture<TwoWayBindingFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoWayBindingFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoWayBindingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
