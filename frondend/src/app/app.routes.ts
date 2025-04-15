import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { HomeMainComponent } from './home-main/home-main.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MainComponent } from './main/main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Nav2Component } from './nav2/nav2.component';
import { About2Component } from './about2/about2.component';
import { DepositComponent } from './deposit/deposit.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { BalanceComponent } from './balance/balance.component';
import { Home2Component } from './home2/home2.component';
import { HistoryComponent } from './history/history.component';

export const routes: Routes = [
    {
        path:'about', component:AboutComponent
        
    },
    {
        path:'', component:HomeMainComponent
    },
    {
        path:'login', component:LoginComponent
    },
    {
        path:'signup', component:SignUpComponent                                                        
    },
    {
        path:'main', component:DashboardComponent
    },
    {
        path:'nav2', component:Nav2Component
    },
    {
    path:'about2', component:About2Component
    },
    {
        path:'deposit', component:DepositComponent
    },
    {
        path:'withdraw', component:WithdrawComponent
    },
    {
        path:'balance', component:BalanceComponent
    },
    {
        path:'home2', component:Home2Component
    },
    {
        path:'history', component:HistoryComponent
    }
];
