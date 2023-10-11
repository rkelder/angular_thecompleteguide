import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeitemComponent } from './recipeitem.component';

describe('RecipeitemComponent', () => {
  let component: RecipeitemComponent;
  let fixture: ComponentFixture<RecipeitemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecipeitemComponent]
    });
    fixture = TestBed.createComponent(RecipeitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
