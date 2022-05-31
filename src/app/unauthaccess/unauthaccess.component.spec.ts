import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnauthaccessComponent } from './unauthaccess.component';

describe('UnauthaccessComponent', () => {
  let component: UnauthaccessComponent;
  let fixture: ComponentFixture<UnauthaccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnauthaccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnauthaccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
