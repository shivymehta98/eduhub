import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{Routes , RouterModule} from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import {  BlogsComponent } from './blogs/blogs.component';
import { InstructorComponent } from './instructor/instructor.component';
import { BodyComponent } from './body/body.component';

const routes:Routes=[
  {path:'',redirectTo:'body',pathMatch:'full'},
  {path:'body', component : BodyComponent},
  {path:'courses', component : CoursesComponent},
  {path:'blogs', component : BlogsComponent},
  {path:'instructor', component : InstructorComponent}
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports:[RouterModule]

})
export class AppRoutingModule {}
export const routingComponents =[BodyComponent,CoursesComponent,BlogsComponent,InstructorComponent]