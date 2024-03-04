import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IProduct } from '../core/interfaces/product.interface';

@Injectable({
    providedIn: 'root',
})
export class ProductService {
    constructor(private http: HttpClient) { }

    getAllProducts(): Observable<IProduct[]> {
        return this.http.get<IProduct[]>(`${environment.urlApi}/products`);
    }

    createProducts(product: IProduct): Observable<IProduct> {
        return this.http.post<IProduct>(`${environment.urlApi}/products`, product);
    }

    updateProducts(product: IProduct): Observable<boolean> {
        return this.http.put<boolean>(`${environment.urlApi}/products`, product);
    }

    deleteProducts(id: number): Observable<boolean> {
        return this.http.delete<boolean>(`${environment.urlApi}/products`, { params: { id } });
    }
}
