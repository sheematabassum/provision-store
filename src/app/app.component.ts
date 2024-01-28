import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StoreLoginComponent } from './store-login/store-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ProductsService } from './products.service';
import { ProductsListingComponent } from './products-listing/products-listing.component';
import { AboutComponent } from './about/about.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,StoreLoginComponent,ProductsListingComponent,HttpClientModule,AboutComponent],
  providers: [ AuthService,ProductsService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'provision-store';
}
