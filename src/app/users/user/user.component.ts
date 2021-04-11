import { Component,Input,Output,EventEmitter,OnInit, OnDestroy } from '@angular/core';
import { AuthService} from '../../auth.service'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, OnDestroy{

  private _authSub: Subscription;
  constructor(private _authService: AuthService){
   
  }

  ngOnInit(): void{
    this._authSub = this._authService.authSubjectObservable.subscribe((data: boolean)=>{
      this.isLoggedIn = data;
    });
  }

  isLoggedIn: boolean;
  @Input() user;
  @Input() i;

  @Output() messageEvent = new EventEmitter<string>();

  sendMessage(): void{


    this.messageEvent.emit(`you have clicked on ${this.user.name}`)
  }

  ngOnDestroy(){

    this._authSub.unsubscribe();
  }
   
}
