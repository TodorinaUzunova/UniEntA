// import { Injectable } from '@angular/core';
// import { HttpInterceptor, HttpRequest, HttpEvent, HttpHandler } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { catchError, tap } from 'rxjs/operators';
// import{ToastrService} from 'ngx-toastr';

// @Injectable({
//   providedIn: 'root'
// })
// export class ToastrInterceptorService implements HttpInterceptor{

//   constructor(public toastr: ToastrService) { }

//   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     console.log('Intercept');
//     return next.handle(req).pipe(tap((success) => {
//       this.toastr.success('success', 'Toastr fun!');
//     }), catchError((err) => {
//       console.log(err);
//       this.toastr.error()
//       throw err
//     }));
//   }
// }
