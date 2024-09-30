import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { CategoriesState } from 'Stores/reducers/categories.reducer';
import * as CategoriesActions from 'Stores/actions/categories.action'
import { Category } from 'Models/category';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent {
  private store = inject(Store<CategoriesState>);

createCategory() {
  const category = new Category();
  this.store.dispatch(CategoriesActions.createCategory({category}));
}

}
