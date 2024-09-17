import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface I_Product {
  idBrand: String;
  idColor: String;
  idDetailsType: String;
  name: String;
  image: String;
  price: Number;
  discount: Number;
  recommend: String;
}

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiProduct: string | undefined;

  private subject = new Subject<I_Product[]>();

  // Chuyển đổi 1 subject thành observerable
  data$ = this.subject.asObservable();

  constructor(private http: HttpClient) {}

  getData() {
    this.apiProduct = 'http://localhost:3001/api/product';
    this.http.get<I_Product[]>(this.apiProduct).subscribe({
      next: (products: I_Product[]) => {
        this.subject.next(products);
      },
      error: (err) => {
        this.subject.error(err);
      },
      complete: () => {
        console.log('complete')
      }
    });
  }
}
