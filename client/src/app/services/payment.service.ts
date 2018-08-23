import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import { StripePubKey } from '../checkout/interface/stripeKeyInterface';




@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  
  PubKey: string;

  constructor(private http: HttpClient) {}


    // API CALL function to get stripepubkey from backend 
    getKey(){
      // const httpOptions = {
      //   headers: new HttpHeaders({ 'Content-Type': 'application/json'})
      // }

      // return  this.http.get<StripePubKey>('http://localhost:5000/checkout').pipe(map(data => {
      //   return console.log("this is the api call " + data);
      // }));

      // return  this.http.get('http://localhost:5000/checkout').pipe(map(data => {
      //   return this.stripePubKey = JSON.stringify(data)
      // }));

      return  this.http.get('http://localhost:5000/checkout').subscribe(data => {
        return console.log(this.PubKey = JSON.stringify(data));
      });


    }
}


// Failed attempts
      // return  this.http.get('http://localhost:5000/checkout');
      // return  this.http.get<any>('http://localhost:5000/checkout').subscribe(data => console.log('Key:' + JSON.stringify(data)));
      // return  this.http.get<any>('http://localhost:5000/checkout').subscribe(data => 
      // // console.log('Key:' + JSON.stringify(data))
      // this.stripePubKey = JSON.stringify(data)
