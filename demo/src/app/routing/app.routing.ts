import { ModuleWithProviders} from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { DashboardComponent } from "./../components/dashboard/dashboard.component";
import { SeconddashboardComponent } from './../components/seconddashboard/seconddashboard.component';

const appRoutes: Routes= [
    {
        path: 'dashboard',
        loadChildren: 'src/app/modules/dashboard/dashboard.module#DashboardModule',
        pathMatch: 'full'
    },
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    // {
    //     path: '**',
    //     redirectTo: 'dashboard',
    //     pathMatch: 'full'
    // },
    {
        path: 'seconddashboard',
        loadChildren: 'src/app/modules/seconddashboard/seconddashboard.module#SeconddashboardModule',
        pathMatch: 'full'
    }
];

export const AppRoutingModule : ModuleWithProviders = RouterModule.forRoot(appRoutes);


const DashboardRoutes : Routes=[
  {
    path:'',
    component: DashboardComponent
  }
];

export const DashboardRoutingModule : ModuleWithProviders = RouterModule.forChild(DashboardRoutes);

const SecondDashboardRoutes : Routes=[
    {
      path:'seconddashboard',
      component: SeconddashboardComponent
    }
  ];

  export const SecondDashboardRoutingModule : ModuleWithProviders = RouterModule.forChild(SecondDashboardRoutes);