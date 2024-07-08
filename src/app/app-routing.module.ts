import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { AdminPanelComponent } from './component/adminpanel/adminpanel.component';
import { UserregisterComponent } from './component/userregister/userregister.component';
import { AdminComponent } from './component/admin/admin.component';
import { UserDashboardComponent } from './component/userdashboard/userdashboard.component';
import { HomeComponent } from './component/home/home.component';
// import { LoginComponent } from './components/login/login.component';
// import { AdminPanelComponent } from './components/adminpanel/adminpanel.component';
// import { UserregisterComponent } from './components/userregister/userregister.component';
// import { AdminComponent } from './components/admin/admin.component';
// import { UserDashboardComponent } from './components/userdashboard/userdashboard.component';
// import { HomeComponent } from './home/home.component';
const routes: Routes = [
  { path: '', redirectTo: '/userlogin', pathMatch: 'full' },
  { path: 'userlogin', component: LoginComponent },
  { path: 'adminpanel', component: AdminPanelComponent },
  { path:'userregister',component:UserregisterComponent},
  {path:'admin',component:AdminComponent},
  {path:'userdashboard',component:UserDashboardComponent},
  {path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }