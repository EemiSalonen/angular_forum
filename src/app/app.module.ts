import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';

import { LandingComponent } from './landing/landing.component';
import { CardComponent } from './card/card.component';
import { ForumJsComponent } from './forum-js/forum-js.component';
import { ForumCoreComponent } from './forum-core/forum-core.component';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { Router } from '@angular/router';
import { ActionComponent } from './action/action.component';
import { CreatepostComponent } from './createpost/createpost.component';
import { ForumPersonalComponent } from './forum-personal/forum-personal.component';
import { ForumHtmlComponent } from './forum-html/forum-html.component';
import { ForumCssComponent } from './forum-css/forum-css.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    LandingComponent,
    CardComponent,
    ForumJsComponent,
    ForumCoreComponent,
    LoginComponent,
    RegisterComponent,
    ActionComponent,
    CreatepostComponent,
    ForumPersonalComponent,
    ForumHtmlComponent,
    ForumCssComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
