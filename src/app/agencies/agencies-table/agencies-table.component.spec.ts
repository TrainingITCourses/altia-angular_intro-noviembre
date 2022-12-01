import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgenciesTableComponent } from './agencies-table.component';

describe('AgenciesTableComponent', () => {
  let component: AgenciesTableComponent;
  let fixture: ComponentFixture<AgenciesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgenciesTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgenciesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
