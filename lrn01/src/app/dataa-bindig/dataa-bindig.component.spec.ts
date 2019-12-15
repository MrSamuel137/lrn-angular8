import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataaBindigComponent } from './dataa-bindig.component';

describe('DataaBindigComponent', () => {
  let component: DataaBindigComponent;
  let fixture: ComponentFixture<DataaBindigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataaBindigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataaBindigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
