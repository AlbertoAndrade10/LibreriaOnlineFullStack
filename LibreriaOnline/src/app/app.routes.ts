import { Routes } from '@angular/router';
import { BaseLayoutComponent } from './layouts/base-layout/base-layout.component';
import { IndexPageComponent } from './pages/index-page/index-page.component';
import { BookPageComponent } from './pages/book-page/book-page.component';
import { LoginPageComponent } from './pages/auth/login-page/login-page.component';
import { RegisterPageComponent } from './pages/auth/register-page/register-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { AdministrationPageComponent } from './pages/administration-page/administration-page.component';
import { BookManagementComponent } from './components/management/book-management/book-management.component';
import { UsersManagementComponent } from './components/management/users-management/users-management.component';
import { OrdersManagementComponent } from './components/management/orders-management/orders-management.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';


export const routes: Routes = [
    {
        path: '',
        component: BaseLayoutComponent,
        children: [
            //-->> public routes<<--
            { path: '', component: IndexPageComponent },
            { path: 'books', component: BookPageComponent },
            { path: 'login', component: LoginPageComponent },
            { path: 'register', component: RegisterPageComponent },
            { path: 'contact', component: ContactPageComponent },

            // -->> protected routes <<--
            { path: 'administration', component: AdministrationPageComponent },
            { path: 'administration/books', component: BookManagementComponent },
            { path: 'administration/users', component: UsersManagementComponent },
            { path: 'administration/orders', component: OrdersManagementComponent },

            // -->> Error page <<--
            { path: '404-notfound', component: ErrorPageComponent },
        ]
    }
];
