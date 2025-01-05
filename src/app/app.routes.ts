import { Routes } from '@angular/router';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { AppHomeComponent } from './app-home/app-home.component';
import { GameListComponent } from './game/game-list/game-list.component';
import { GameViewComponent } from './game/game-view/game-view.component';
import { CartDetailsComponent } from './cart/cart-details/cart-details.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: '',
    component: AppLayoutComponent,
    // title : 'Home Page'
    children: [
      {
        path: 'home',
        component: AppHomeComponent,
        title: 'Retro Home',
      },
      {
        path: 'games', //Need to group games under a single parent route
        component: GameListComponent,
        title: 'Retro Games',
      },
      {
        path: 'game/:id',
        component: GameViewComponent,
        title: 'Game Details',
      },
      {
        path: 'cart',
        component: CartDetailsComponent,
        title: 'User Cart',
      },
    ],
  },
];
