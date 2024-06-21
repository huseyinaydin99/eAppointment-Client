import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LayoutsComponent } from './components/layouts/layouts.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AuthService } from './services/auth.service';
import { inject } from '@angular/core';

export const routes: Routes =
[
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "",
        component: LayoutsComponent,
        canActivateChild: [()=> inject(AuthService).isAuthenticated()],
        //AuthServie nesnesini IoC Container'den enjekte et ve nesne üzerinden isisAuthenticated() fonksiyonunu çağır kişinin kimliği doğrulanmış mı onu test et ve ona göre yavru komponenti çağır.
        children: [
            {
                path: "home",
                component: HomeComponent
            }
        ]
    },
    {
        path: "**",
        component: NotFoundComponent
    }
];