import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreloadAllModules, RouterModule,Routes } from '@angular/router'
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';
import { CourseDetailsComponent } from './courses/course-details/course-details.component';
 
const routes : Routes = [
{
  path: '',
  component: HomeComponent
},

{
  path: 'login',
  component: LoginComponent
},

{
  path: 'users',
  component: UsersComponent
},

{
  path: 'about',
  component: AboutComponent
},
{ path: 'courses',
 loadChildren:
  () => import('./courses/courses.module')
  .then(m => m.CoursesModule) },
  

]

@NgModule({
  
  imports: [
    RouterModule.forRoot(routes,{
      //preloadingStrategy: PreloadAllModules
    })
  ],
  exports:[

    RouterModule
  ]
})
export class AppRoutingModule { }
