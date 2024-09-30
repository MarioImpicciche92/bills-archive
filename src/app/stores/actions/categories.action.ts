import { createAction, props } from '@ngrx/store';
import { Category } from 'Models/category';

export const createCategory = createAction(
    '[CategoryStore] Create Category',
    props<{category: Category}>()
);

export const createCategorySuccess = createAction(
    '[CategoryStore] Create Category Success',
    props<{category: Category}>()
);

export const createCategoryFailure = createAction(
    '[CategoryStore] Create Category Failure'
);
