import { Routes } from '@angular/router';
import { StoreLoginComponent } from './store-login/store-login.component';
import { ProductsListingComponent } from './products-listing/products-listing.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    {path:'',component:StoreLoginComponent},
    {path:'products',component:ProductsListingComponent},
    {path:'about',component:AboutComponent}
];
