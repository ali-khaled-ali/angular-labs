import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //templateUrl: './mycomp/mycomp.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  userName: string = 'lab1';
  isClassNeeded: boolean = true;
}
