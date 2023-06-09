/**
 * Product and product review communication with the back end.
 *
 * @author Dylan Skokan, Isaiah Cuellar, Tom Waterman, Justin Pham, Kyle McClernon
 */
import { Observable } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Hat } from '../model/hat';
import { Pants } from '../model/pants';
import { Product } from '../model/product';
import { Review } from '../model/review';
import { Shirt } from '../model/shirt';
import { Shoe } from '../model/shoe';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getShirtById(id: number): Observable<Shirt> {
    return this.http.get<Shirt>(`http://localhost:8080/shirt/getById/${id}`)
  }

  getReviewsByProdId(id: number): Observable<Review[]> {
    return this.http.get<Review[]>(`http://localhost:8080/productReview/getById/${id}`)
  }

  postReview(rating: number, userId: number, productId: number, review: string, username: string):
    Observable<boolean> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<boolean>
      ('http://localhost:8080/productReview/saveProductReview',
        { rating, userId, productId, review, username },
        { headers: headers })
  }

  getShoesById(id: number): Observable<Shoe> {
    return this.http.get<Shoe>(`http://localhost:8080/shoes/getById/${id}`)
  }

  getHatById(id: number): Observable<Hat> {
    return this.http.get<Hat>(`http://localhost:8080/hat/getById/${id}`)
  }

  getPantsById(id: number): Observable<Pants> {
    return this.http.get<Pants>(`http://localhost:8080/pants/getById/${id}`)
  }

  getShirts(): Observable<string> {
    return this.http.get<string>('http://localhost:8080/shirt/getAll')
  }

  getShoes(): Observable<string> {
    return this.http.get<string>('http://localhost:8080/shoes/getAll')
  }

  getPants(): Observable<string> {
    return this.http.get<string>('http://localhost:8080/pants/getAll')
  }

  getHats(): Observable<string> {
    return this.http.get<string>('http://localhost:8080/hat/getAll')
  }

  getAllProducts(): Observable<Product> {
    return this.http.get<Product>('http://localhost:8080/product/all')
  }
}
