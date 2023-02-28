import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemServiceService {
  public sampleData: any[] =
  [{ id: 1, price: 20, total: 20, quantity: 1, description: 'stick O' },
  { id: 1, price: 20, total: 25, quantity: 2, description: 'Hotdog' },
  { id: 1, price: 20, total: 25, quantity: 1, description: 'Fries' },
  { id: 1, price: 20, total: 20, quantity: 2, description: 'Isaw' },
  { id: 1, price: 20, total: 100, quantity: 1, description: 'BBQ' },
];

  constructor() { }
  getData() : Observable<any>
  {
    return of(this.sampleData);
  }
}
  