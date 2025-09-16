import { Routes } from '@angular/router';
import { BaseLayout } from './components/layouts/base-layout/base-layout';
import { IndexPage } from './pages/index-page/index-page';


export const routes: Routes = [
    {
        path: '',
        component: BaseLayout,
        children: [
            {
                path: '',
                component: IndexPage
            }
        ]
    }
];
