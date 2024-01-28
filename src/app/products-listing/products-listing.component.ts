import { Component, OnInit,Inject, ChangeDetectorRef } from '@angular/core';
import { ProductsService } from '../products.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule,DOCUMENT } from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';
import { FormControl } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { Router } from '@angular/router';


@Component({
  selector: 'app-products-listing',
  standalone: true,
  imports: [MatCardModule,MatInputModule,MatFormFieldModule,MatButtonModule,
    FlexLayoutModule,MatToolbarModule,CommonModule,MatGridListModule,MatIconModule],
  templateUrl: './products-listing.component.html',
  styleUrl: './products-listing.component.scss'
})
export class ProductsListingComponent implements OnInit {
  productList:any[]=[];
  localStorage:any;
  totalProductList:any[]=[];
  btnFlag:boolean=false;
  searchControl= new FormControl<string>('');
  constructor(protected products:ProductsService,@Inject(DOCUMENT) private document: Document,
  protected cdr:ChangeDetectorRef,protected router:Router){

  }
  ngOnInit() {
     this.localStorage = this.document.defaultView?.localStorage;
    let token = this.localStorage?.getItem("access_token");

    this.products.getProductsdetails(token).subscribe((result)=>{
     this.productList = result?.response;
     this.totalProductList = result?.response;
     
    })

  }

  searchProduct(event:any){
   if(event?.target?.value ===""){
     this.productList=this.totalProductList;
     this.btnFlag = false;
   }else{
    this.productList = this.productList.filter(productDetails=>productDetails?.productCategory?.productCategoryName.
      toLowerCase().includes(event?.target?.value.toLowerCase()));
      this.btnFlag = true;
   }
   this.cdr.detectChanges();
  }

  routeAboutUs(){
    this.router.navigateByUrl("about")
  }
}
