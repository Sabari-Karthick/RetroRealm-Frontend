import { Routes } from '@angular/router';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { AppHomeComponent } from './app-home/app-home.component';
import { GameListComponent } from './game/game-list/game-list.component';
import { GameViewComponent } from './game/game-view/game-view.component';

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
        title:'Retro Home'
      },
      {
        path: 'games',
        component: GameListComponent,
        title:'Retro Games'
      },{
        path: 'game/:id',
        component: GameViewComponent,
        title:'Game Details'
      }
    ],
  },
];
