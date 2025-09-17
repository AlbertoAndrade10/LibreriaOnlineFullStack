import { Routes } from '@angular/router';
import { BaseLayout } from './components/layouts/base-layout/base-layout';
import { IndexPage } from './pages/index/index-page/index-page';
import { BookPage } from './pages/book/book-page/book-page';
import { ContactPage } from './pages/contact/contact-page/contact-page';


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
                path: 'contact',
                component: ContactPage
            },

        ]
    }
];
