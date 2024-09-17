import { Routes } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { BindingComponent } from './binding/binding.component';
import { HomeComponent } from './home/home.component';
import { DetailsArticleComponent } from './detailsArticle/detailsArticle.component';

export const routes: Routes = [
    {
        path: 'home', component: HomeComponent
    },
    {
        path: 'detail',
        component: CounterComponent,
        children: [
            {
                path: 'binding',
                component: BindingComponent,
            },
        ]
    },
    {
        path: 'detail/:slug',
        component: DetailsArticleComponent,
    },
];
