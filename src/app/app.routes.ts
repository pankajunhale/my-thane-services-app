import { Route } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

export const routes: Route[] = [
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.component').then((m) => m.LoginComponent),
    pathMatch: 'full',
  },
  {
    path: 'logout',
    loadChildren: () =>
      import('./pages/logout/logout.component').then((m) => m.LogoutComponent),
    pathMatch: 'full',
  },
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadComponent: () =>
          import('./pages/home/home.component').then((c) => c.HomeComponent),
      },
    ],
  },
  // {
  //   path: '',
  //   loadComponent: () =>
  //     import('./layouts/admin-layout/admin-layout.component').then(
  //       (c) => c.AdminLayoutComponent
  //     ),
  //   children: [
  //     {
  //       path: 'dashboard',
  //       pathMatch: 'full',
  //       loadComponent: () =>
  //         import('./pages/home/home.component').then((c) => c.HomeComponent),
  //     },
  //   ],
  // },
];
