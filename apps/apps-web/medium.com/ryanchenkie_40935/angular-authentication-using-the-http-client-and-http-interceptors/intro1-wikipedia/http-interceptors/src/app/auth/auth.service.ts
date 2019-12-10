// src/app/auth/auth.service.ts
import { Injectable } from '@angular/core';
import decode from 'jwt-decode';
import { HttpRequest } from '@angular/common/http';
@Injectable()
export class AuthService {
  cachedRequests: Array<HttpRequest<any>> = [];

  public getToken(): string {
    return localStorage.getItem('token');
  }
  public isAuthenticated(): boolean {
    // get the token
    const token = this.getToken();
    if (token) {
      return this.tokenNotExpired(token);
    }
    return false;
  }
  tokenNotExpired(token: string): boolean {
    const jwt = decode(token);
    const currentTime = new Date().getTime() / 1000;
    if (currentTime > jwt.exp) {
      return true;
    }
    return false;
  }
  public collectFailedRequest(request): void {
    this.cachedRequests.push(request);
  }
  public retryFailedRequests(): void {
    // retry the requests. this method can
    // be called after the token is refreshed
  }
}
