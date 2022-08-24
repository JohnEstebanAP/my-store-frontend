import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProductsCatsComponent } from './list-products-cats.component';

describe('ListProductsCatsComponent', () => {
  let component: ListProductsCatsComponent;
  let fixture: ComponentFixture<ListProductsCatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListProductsCatsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListProductsCatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
