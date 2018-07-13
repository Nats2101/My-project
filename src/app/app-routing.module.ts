import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes, PreloadAllModules, RouteReuseStrategy } from '@angular/router';


export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: '', component: HomeComponent},
    { path: 'home', redirectTo: '' },    
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'detail', component: DetailComponent },
    { path: 'list', component: ListComponent }
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { useHash: false , preloadingStrategy: PreloadAllModules})
  ],
  //  providers: [ {provide: RouteReuseStrategy, useClass: CustomReuseStrategy}],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
