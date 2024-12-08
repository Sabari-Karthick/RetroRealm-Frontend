import { Routes } from '@angular/router';
import { AppLayoutComponent } from './app-layout/app-layout.component';

export const routes: Routes = [
    {
      path:'',
      redirectTo:'/home',
      pathMatch:'full'
    },
    {
        path : 'home',
        component : AppLayoutComponent,
        title : 'Home Page'
    }
];
