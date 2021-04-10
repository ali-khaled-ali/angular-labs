import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

      userName: string = '';
      userNameDisplay: string = ''; 
      isLogged: boolean = false;
      
      onInput():void{
        console.log(this.userName);
      }

      logged():void{
        if(this.userName != '')
        {
          this.isLogged = true;
          this.userNameDisplay = this.userName;
          this.userName = '';
        }
        
       
        console.log(this.isLogged);
      }
      logout():void{
        this.isLogged = false;
        console.log(this.isLogged)
      }
  

}
