import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetcareComponent } from './petcare.component';

describe('PetcareComponent', () => {
  let component: PetcareComponent;
  let fixture: ComponentFixture<PetcareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetcareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetcareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
