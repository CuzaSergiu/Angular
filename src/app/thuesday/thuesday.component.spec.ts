import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThuesdayComponent } from './thuesday.component';

describe('ThuesdayComponent', () => {
  let component: ThuesdayComponent;
  let fixture: ComponentFixture<ThuesdayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThuesdayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThuesdayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
