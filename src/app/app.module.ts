import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { QuestionComponent } from './question/question.component';
import { WelcomeFormComponent } from './welcome-form/welcome-form.component';
import { HttpClientModule } from '@angular/common/http';
import { QuestionListComponent } from './question-list/question-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    QuestionComponent,
    WelcomeFormComponent,
    QuestionListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
