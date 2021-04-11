import { asLiteral } from '@angular/compiler/src/render3/view/util';
import { Component } from '@angular/core';
import { User } from '../user.model'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent  {

  

  users: User[] =[

    {
      name: 'ali',
      age: 21,
      job: 'eng'
    },

    {
      name: 'ahmed',
      age: 19,
      job: 'cop'
    },


    {
      name: 'lolo',
      age: 17
    }

  ];
  
   message: string;
  recieveMessage(ev):void{

    this.message = ev;

  }


}
