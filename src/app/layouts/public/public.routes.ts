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
        title: 'Cooperatives'
      },
      {
        path: 'individuals',
        loadComponent: () => import('../../pages/public/individuals/individuals.component').then(m => m.IndividualsComponent),
        title: 'Individuals'
      },
      {
        path: 'card-issuers',
        loadComponent: () => import('../../pages/public/card-issuers/card-issuers.component').then(m => m.CardIssuersComponent),
        title: 'Card Issuers'
      },
      {
        path: 'merchants',
        loadComponent: () => import('../../pages/public/merchants/merchants.component').then(m => m.MerchantsComponent),
        title: 'Merchants'
      },
      {
        path: 'governments',
        loadComponent: () => import('../../pages/public/governments/governments.component').then(m => m.GovernmentsComponent),
        title: 'Governments'
      },
      {
        path: 'contact',
        loadComponent: () => import('../../pages/public/contact/contact.component').then(m => m.ContactComponent),
        title: 'Contact'
      },
      {
        path: 'impact',
        loadComponent: () => import('../../pages/public/impact/impact.component').then(m => m.ImpactComponent),
        title: 'Impact'
      }
    ]
  }

]
