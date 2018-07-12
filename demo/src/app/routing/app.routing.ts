import { ModuleWithProviders} from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { DashboardComponent } from "./../components/dashboard/dashboard.component";

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
    {
        path: '**',
        redirectTo: 'dashboard',
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