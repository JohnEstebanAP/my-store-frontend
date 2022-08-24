import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProductsFoodComponent } from './list-products-food.component';

describe('ListProductsFoodComponent', () => {
  let component: ListProductsFoodComponent;
  let fixture: ComponentFixture<ListProductsFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListProductsFoodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListProductsFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
