import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class VendorsService {
  constructor(private http: HttpClient) { }

  getVendor(inputVendorId: Number) {
    return this.http.get('http://belmj06jhgq.sea.corp.expecn.com:3333/vendors/' + inputVendorId);
  }
}
