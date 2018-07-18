import { ModuleWithProviders} from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { DashboardComponent } from "./../components/dashboard/dashboard.component";
import { InboxComponent } from './../components/inbox/inbox.component';
import { MerchandiseComponent } from './../components/merchandise/merchandise.component';
import { StoresComponent } from './../components/stores/stores.component';

const appRoutes: Routes= [
    {
        path: 'dashboard',
        loadChildren: 'app/modules/dashboard/dashboard.module#DashboardModule'
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
    component: DashboardComponent,
    children :[
        {
            path: '',
            redirectTo: 'inbox'
        },
        {
            path: 'inbox',
            component: InboxComponent
        },
        {
            path: 'merchandise',
            component: MerchandiseComponent
        },
        {
            path: 'stores',
            component: StoresComponent
        }
    ]
  }
];

export const DashboardRoutingModule : ModuleWithProviders = RouterModule.forChild(DashboardRoutes);