import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(
    private httpClient: HttpClient
  ) { }

  xpaytoken: string = 'AUSR3NC9GJO845735CP821meezsKGfwFDK3uhYsT4O61Ig5B4'
  url = 'https://sandbox.api.visa.com/merchant-api-ic/client/profiles'


  PaymentHeaders() {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'x-pay-token': this.xpaytoken
    })
  }

  pay(data:any) {
    const body = JSON.stringify(data)
    return this.httpClient.post(this.url, body, {headers: this.PaymentHeaders()});
  }

  getpay() {
    return this.httpClient.get(this.url, {headers: this.PaymentHeaders()});
  }


}
