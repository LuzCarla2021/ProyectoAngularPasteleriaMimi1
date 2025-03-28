import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosLandingComponent } from './productos-landing.component';

describe('ProductosLandingComponent', () => {
  let component: ProductosLandingComponent;
  let fixture: ComponentFixture<ProductosLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductosLandingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductosLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
