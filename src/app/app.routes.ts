import { Route } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LogoutComponent } from './pages/logout/logout.component';

export const routes: Route[] = [
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.component').then((m) => m.LoginComponent),
    pathMatch: 'full',
  },
  {
    path: 'logout',
    component: LogoutComponent,
  },
  {
    path: 'registration',
    loadComponent: () =>
      import('./pages/signup/signup.component').then((m) => m.SignupComponent),
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
      {
        path: 'service-category',
        loadComponent: () =>
          import('./pages/service-category/service-category.component').then(
            (c) => c.ServiceCategoryComponent
          ),
      },
      {
        path: 'profile',
        loadComponent: () =>
          import('./pages/profile/profile.component').then(
            (c) => c.ProfileComponent
          ),
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'dashboard',
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
