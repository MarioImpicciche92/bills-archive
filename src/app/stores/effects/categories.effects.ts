import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, mergeMap, of } from 'rxjs';
import { CategoriesService } from 'Services/categories.service';
// import { EMPTY } from 'rxjs';
// import { map, mergeMap, catchError } from 'rxjs/operators';

import * as CategoriesActions from 'Stores/actions/categories.action';
//import all requried services or any dependencies

@Injectable()
export class CategoryEffects {
    private actions$ = inject(Actions);
    private categoryService = inject(CategoriesService);

    createCategory$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CategoriesActions.createCategory),
            exhaustMap((action) => this.categoryService.createCategory(action.category).pipe(
                    map(category => CategoriesActions.createCategorySuccess({category})),
                    catchError(() => of(CategoriesActions.createCategoryFailure()))
            )
        )
    ));
}