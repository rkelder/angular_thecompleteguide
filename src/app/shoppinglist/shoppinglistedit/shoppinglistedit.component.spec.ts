import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppinglisteditComponent } from './shoppinglistedit.component';

describe('ShoppinglisteditComponent', () => {
  let component: ShoppinglisteditComponent;
  let fixture: ComponentFixture<ShoppinglisteditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShoppinglisteditComponent]
    });
    fixture = TestBed.createComponent(ShoppinglisteditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
