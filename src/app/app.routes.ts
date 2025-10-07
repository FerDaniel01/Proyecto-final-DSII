import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'dashboard',
    loadComponent: ()=>import('./meal/pages/dasboard-page/dasboard-page'),
        children:[    
    {
        path: 'trending',
    loadComponent: ()=>import('./meal/pages/trending-page/trending-page')
    },
     {
        path: 'search',
    loadComponent: ()=>import('./meal/pages/search-page/search-page')
    },
{
        path: '**',
        redirectTo: 'trending'
    },]
    },
  

      {
        path: '**',
        redirectTo: 'dashboard'
    },
];
