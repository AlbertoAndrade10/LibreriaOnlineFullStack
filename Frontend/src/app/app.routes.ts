import { Routes } from '@angular/router';
import { BaseLayout } from './components/layouts/base-layout/base-layout';
import { IndexPage } from './pages/index/index-page/index-page';
import { BookPage } from './pages/book/book-page/book-page';
import { LoginPage } from './pages/login/login-page/login-page';
import { RegisterPage } from './pages/register/register-page/register-page';
import { DashBoardPage } from './pages/dashboard/dash-board-page/dash-board-page';



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
                component: DashBoardPage
            },


        ]
    }
];
