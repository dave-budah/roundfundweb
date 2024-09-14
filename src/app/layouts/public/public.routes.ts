import {PublicComponent} from "./public.component";
import {Route} from "@angular/router";

export const routes: Route[] = [
  {
    path: '',
    component: PublicComponent,
    title: 'Home',
    children: [
      {
        path: '', redirectTo: 'home', pathMatch: 'full'
      },
      {
        path: 'home',
        loadComponent: () => import('../../pages/public/home/home.component').then(m => m.HomeComponent),
        title: 'Home',
      },
      {
        path: 'cooperatives',
        loadComponent: () => import('../../pages/public/cooperatives/cooperatives.component').then(m => m.CooperativesComponent),
      },
      {
        path: 'individuals',
        loadComponent: () => import('../../pages/public/individuals/individuals.component').then(m => m.IndividualsComponent),
      },
      {
        path: 'card-issuers',
        loadComponent: () => import('../../pages/public/card-issuers/card-issuers.component').then(m => m.CardIssuersComponent),
      },
      {
        path: 'merchants',
        loadComponent: () => import('../../pages/public/merchants/merchants.component').then(m => m.MerchantsComponent),
      },
      {
        path: 'governments',
        loadComponent: () => import('../../pages/public/governments/governments.component').then(m => m.GovernmentsComponent),
      },
      {
        path: 'faq',
        loadComponent: () => import('../../pages/public/faq/faq.component').then(m => m.FaqComponent),
      },
      {
        path: 'about',
        loadComponent: () => import('../../pages/public/about/about.component').then(m => m.AboutComponent),
      }
    ]
  }

]
