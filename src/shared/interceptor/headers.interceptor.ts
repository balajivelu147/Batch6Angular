import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HeadersInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log( request );
    const url = request.url.replace('https','http');
    const updatedRequest = request.clone({ setHeaders: { 'AuthToken': 'FPWt6CAAeGF1uIE43s5avByoO3VT8s88' }  });
   // const updatedRequest = request.clone({   url  : url  });

    // (updatedRequest as any).url = updatedRequest.url.replace('https','http');
    return next.handle(updatedRequest);
  }
}
