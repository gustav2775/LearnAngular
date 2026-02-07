import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";

@Injectable()
export class ApiAuthService {
  http = inject(HttpClient);

  login (request: { name: string, password: string }) {
    return this.http.post('http://localhost:5050/api/v1/login', request)
  }

  logout () {
    return this.http.post('http://localhost:5050/api/v1/logout', {})
  }

  registry(request: { name: string, password: string }) {
    return this.http.post('http://localhost:5050/api/v1/registry', request)
  }
}
