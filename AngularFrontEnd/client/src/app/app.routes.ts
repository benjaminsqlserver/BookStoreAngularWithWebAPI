import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';

import { LoginLayoutComponent } from './login-layout/login-layout.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { BookComponent } from './book/book.component';
import { AddBookComponent } from './add-book/add-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { Redirect1Component } from './redirect-1/redirect-1.component';

export const routes: Routes = [
  { path: '', redirectTo: '/book', pathMatch: 'full' },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'book',
        component: BookComponent
      },
      {
        path: 'add-book',
        component: AddBookComponent
      },
      {
        path: 'edit-book/:id',
        component: EditBookComponent
      },
      {
        path: 'redirect-1',
        component: Redirect1Component
      },
    ]
  },
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
