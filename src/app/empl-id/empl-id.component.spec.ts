import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmplIdComponent } from './empl-id.component';

describe('EmplIdComponent', () => {
  let component: EmplIdComponent;
  let fixture: ComponentFixture<EmplIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmplIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmplIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
