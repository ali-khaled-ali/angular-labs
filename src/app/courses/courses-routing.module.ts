import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { CourseReactiveFormComponent } from './course-reactive-form/course-reactive-form.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CoursesComponent } from './courses.component';

const routes: Routes = [
// {  path: '',
//   redirectTo: 'list'
// },
  // { path: '', component: CoursesComponent },

  {
    path: '',
    component: CoursesComponent,
    children: [
      { path: '', component: CoursesListComponent },
      

      {
        path: 'new', component: CourseReactiveFormComponent
      },

      {
        path: ':id', component: CourseDetailsComponent
      },

     

      
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
