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
import { SweetAlertService } from 'angular-sweetalert-service';


import { LoginService } from './services/login.service';
import { SignupService } from './services/register.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardSidebarComponent } from './dashboard-sidebar/dashboard-sidebar.component';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component'
import { ViewUsersService } from './services/view-users.service'
import { Logger } from "angular2-logger/core"; // ADD THIS

const appRoutes: Routes = [
  // { path: 'dashboard', canActivate: [AuthGuard], component: DashboardComponent },
  { path: '', component: MainBodyComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', canActivate: [AuthGuard], component: DashboardComponent },
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
    DashboardHomeComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    NgbModule.forRoot(),
    NgxPaginationModule,


  ],
  providers: [LoginService, Logger, SignupService, AuthGuard, ViewUsersService, SweetAlertService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
