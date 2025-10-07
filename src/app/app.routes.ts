import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {
        path: 'dashboard',
        loadComponent: () => import('./meal/pages/dasboard-page/dasboard-page'),
        children: [
            {
                path: 'search-meal',
                loadComponent: () => import('./meal/pages/search-meal/search-meal')
            },
            {
                path: 'trending',
                loadComponent: () => import('./meal/pages/trending-page/trending-page')
            },
            {
                path: 'search',
                loadComponent: () => import('./meal/pages/search-page/search-page')
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
