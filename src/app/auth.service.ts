import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

    private _authSubject = new BehaviorSubject<boolean>(false);

    get authSubjectObservable(){

      return this._authSubject.asObservable();
    }

    broadCastAuthValue(value: boolean):void{
      this._authSubject.next(value);
    }
}
