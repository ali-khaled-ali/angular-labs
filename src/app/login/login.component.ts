import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService} from '../auth.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit,OnDestroy {


      isLogged: boolean ;
      private _authSub: Subscription;
      constructor(private _authService: AuthService){


      }

      
      ngOnInit(): void{

       this._authSub = this._authService.authSubjectObservable.subscribe((data: boolean)=>{

          console.log(data);
          this.isLogged = data;
        });

      }
      
      userName: string = '';
      userNameDisplay: string = ''; 
      
      onInput():void{
        console.log(this.userName);
      }

      logged():void{
        if(this.userName != '')
        {
          this._authService.broadCastAuthValue (true);
          this.userNameDisplay = this.userName;
          this.userName = '';
        }
        
       
        console.log(this.isLogged);
      }
      logout():void{
        this._authService.broadCastAuthValue (false);
        console.log(this.isLogged)
      }
  
      ngOnDestroy(){

        this._authSub.unsubscribe();
      }

}
