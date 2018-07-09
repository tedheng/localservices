import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeafoodbuffetComponent } from './seafoodbuffet.component';

describe('SeafoodbuffetComponent', () => {
  let component: SeafoodbuffetComponent;
  let fixture: ComponentFixture<SeafoodbuffetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeafoodbuffetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeafoodbuffetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
