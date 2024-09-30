import { Action, createReducer, on } from '@ngrx/store';
import * as CategoriesActions from '../actions/categories.action';
import { Category } from 'Models/category';

export interface CategoriesState {
    categories: Category[]
};

export const initialState = {
    categories: []
} as CategoriesState;

export const categorieReducer = createReducer(
    initialState,
    on(CategoriesActions.createCategorySuccess, (state, action) => ({ ...state, categories: [...state.categories, action.category] })),
);