import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DogsCompComponent } from './dogs-comp.component';

describe('DogsCompComponent', () => {
  let component: DogsCompComponent;
  let fixture: ComponentFixture<DogsCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DogsCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DogsCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
