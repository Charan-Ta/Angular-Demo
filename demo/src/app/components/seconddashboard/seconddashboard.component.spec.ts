import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeconddashboardComponent } from './seconddashboard.component';

describe('SeconddashboardComponent', () => {
  let component: SeconddashboardComponent;
  let fixture: ComponentFixture<SeconddashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeconddashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeconddashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
