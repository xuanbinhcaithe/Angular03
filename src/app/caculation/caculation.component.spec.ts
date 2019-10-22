import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaculationComponent } from './caculation.component';

describe('CaculationComponent', () => {
  let component: CaculationComponent;
  let fixture: ComponentFixture<CaculationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaculationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaculationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
