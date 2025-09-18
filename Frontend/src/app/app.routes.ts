import { Routes } from '@angular/router';
import { BaseLayout } from './components/layouts/base-layout/base-layout';
import { IndexPage } from './pages/index/index-page/index-page';
import { BookPage } from './pages/book/book-page/book-page';
import { LoginPage } from './pages/login/login-page/login-page';
import { RegisterPage } from './pages/register/register-page/register-page';
import { DashBoardPage } from './pages/dashboard/dash-board-page/dash-board-page';
import { AdministrationBookPage } from './pages/dashboard/administration-book-page/administration-book-page';
import { AdministrationUserPage } from './pages/dashboard/administration-user-page/administration-user-page';
import { AdministrationStockPage } from './pages/dashboard/administration-stock-page/administration-stock-page';
import { AdministrationOrderPage } from './pages/dashboard/administration-order-page/administration-order-page';
import { DashboardLayout } from './components/layouts/dashboard-layout/dashboard-layout';




export const routes: Routes = [
    {
        path: '',
        component: BaseLayout,
        children: [
            {
                path: '',
                component: IndexPage
            },
            {
                path: 'books',
                component: BookPage
            },
            {
                path: 'login',
                component: LoginPage
            },
            {
                path: 'register',
                component: RegisterPage
            },
            {
                path: 'dashboard',
                component: DashboardLayout,
                children: [
                    {
                        path: 'administration-books',
                        component: AdministrationBookPage,

                    },
                    {
                        path: 'administration-users',
                        component: AdministrationUserPage,

                    },
                    {
                        path: 'administration-stock',
                        component: AdministrationStockPage,

                    },
                    {
                        path: 'administration-orders',
                        component: AdministrationOrderPage,

                    },
                ]
            },



        ]
    }


];
