import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProductsFashionComponent } from './list-products-fashion.component';

describe('ListProductsFashionComponent', () => {
  let component: ListProductsFashionComponent;
  let fixture: ComponentFixture<ListProductsFashionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListProductsFashionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListProductsFashionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
