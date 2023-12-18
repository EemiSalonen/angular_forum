import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatepostComponent } from './createpost/createpost.component';
import { ForumCssComponent } from './forum-css/forum-css.component';
import { ForumHtmlComponent } from './forum-html/forum-html.component';
import { ForumJsComponent } from './forum-js/forum-js.component';
import { ForumPersonalComponent } from './forum-personal/forum-personal.component';
import { LandingComponent } from './landing/landing.component';
import { LoginGuard } from './login.guard';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'landing', component: LandingComponent, canActivate: [LoginGuard] },
  { path: 'login', component: LoginComponent, canActivate: [LoginGuard] },
  { path: 'js', component: ForumJsComponent, canActivate: [LoginGuard] },
  { path: 'html', component: ForumHtmlComponent, canActivate: [LoginGuard] },
  { path: 'css', component: ForumCssComponent, canActivate: [LoginGuard] },
  {
    path: 'createpost',
    component: CreatepostComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'personal',
    component: ForumPersonalComponent,
    canActivate: [LoginGuard],
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
