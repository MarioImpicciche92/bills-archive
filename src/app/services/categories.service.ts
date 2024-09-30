import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Category } from 'Models/category';
import { Observable } from 'rxjs';
import { environment } from 'Environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private http = inject(HttpClient);
  
  createCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(`${environment.BACKEND_URL}/categories`, category)
  }
}
