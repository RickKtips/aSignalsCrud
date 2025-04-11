import { Routes } from '@angular/router';
import { ContactListComponent } from './components/contact-list/contact-list.component';
// import { AddContactComponent } from './components/add-contact/add-contact.component';
// import { EditContactComponent } from './components/edit-contact/edit-contact.component';
// import { SobreComponent } from './components/sobre/sobre.component';
export const routes: Routes = [
    {
        path:'',
        component:ContactListComponent,
        pathMatch:'full'
    },
    {
        path: 'new',
       loadComponent: () => import('./components/add-contact/add-contact.component').then(m => m.AddContactComponent)
      },    
    {
        path:'edit/:id',
        loadComponent: () => import('./components/edit-contact/edit-contact.component').then(m => m.EditContactComponent)
    },
    {
        path:'sobre',
        loadComponent: () => import('./components/sobre/sobre.component').then(m => m.SobreComponent)
    },     
];
