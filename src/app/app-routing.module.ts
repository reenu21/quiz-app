import { QuestionListComponent } from './question-list/question-list.component';
import { WelcomeFormComponent } from './welcome-form/welcome-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    component:WelcomeFormComponent
  },
  {
    path:'question',
    component:QuestionListComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
