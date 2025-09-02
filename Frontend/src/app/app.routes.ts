import { Routes } from '@angular/router';
import { BaseLayout } from './components/layouts/base-layout/base-layout';
import { IndexPage } from './pages/index-page/index-page';
import { BooksPage } from './pages/books-page/books-page';
import { ContactPage } from './pages/contact-page/contact-page';
import { Dashboard } from './pages/dashboard/dashboard';
import { LoginPage } from './pages/login-page/login-page';
import { RegisterPage } from './pages/register-page/register-page';
import { CartPage } from './pages/cart-page/cart-page';

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
                component: BooksPage
            },
            {
                path: 'contact',
                component: ContactPage
            },
            {
                path: 'dashboard',
                component: Dashboard

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
                path: 'cart',
                component: CartPage

            },
        ]
    }
];
