import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule, FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule, Http } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from './guard/auth.guard';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainBodyComponent } from './main-body/main-body.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination'; // <-- import the module
// import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { Logger } from "angular2-logger/core";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoginService } from './services/login.service';
import { SignupService } from './services/register.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardSidebarComponent } from './dashboard-sidebar/dashboard-sidebar.component';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component'
import { ViewUsersService } from './services/view-users.service'

import { DashboardWelcomeComponent } from './dashboard-welcome/dashboard-welcome.component';
import { DashboardAdduserComponent } from './dashboard-adduser/dashboard-adduser.component'; // ADD THIS

const appRoutes: Routes = [
  // { path: 'dashboard', canActivate: [AuthGuard], component: DashboardComponent },
  { path: '', component: MainBodyComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', canActivate: [AuthGuard], component: DashboardComponent },
  { path: 'viewusers', component: DashboardHomeComponent },
  { path: 'welcome', component: DashboardWelcomeComponent },
  { path: 'newuser', component: DashboardAdduserComponent },
  { path: '**', component: NotFoundComponent },

];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainBodyComponent,
    LoginComponent,
    RegisterComponent,
    NotFoundComponent,
    DashboardComponent,
    DashboardSidebarComponent,
    DashboardHomeComponent,
    DashboardWelcomeComponent,
    DashboardAdduserComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    NgbModule.forRoot(),
    NgxPaginationModule, BrowserAnimationsModule,
    //  ToastModule.forRoot(),

  ],
  providers: [LoginService, Logger, SignupService, AuthGuard, ViewUsersService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
