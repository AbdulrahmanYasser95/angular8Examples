import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamecenterComponent } from './gamecenter.component';

describe('GamecenterComponent', () => {
  let component: GamecenterComponent;
  let fixture: ComponentFixture<GamecenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamecenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamecenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
