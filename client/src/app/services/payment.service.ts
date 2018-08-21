import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


// const httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json'})
// }

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  
  // stripePubKey: any;

  constructor(private http:HttpClient) {}
    // function to get stripepubkey from backend
    getKey(){
       return  this.http.get('http://localhost:5000/checkout');

    }
}
