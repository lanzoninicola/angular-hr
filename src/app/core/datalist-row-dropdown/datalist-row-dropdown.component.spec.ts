import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatalistRowDropdownComponent } from './datalist-row-dropdown.component';

describe('DatalistRowDropdownComponent', () => {
  let component: DatalistRowDropdownComponent;
  let fixture: ComponentFixture<DatalistRowDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatalistRowDropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatalistRowDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
