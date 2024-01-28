import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-store-login',
  standalone: true,
  imports: [MatCardModule,MatInputModule,MatFormFieldModule,MatButtonModule,CommonModule,
    FlexLayoutModule,MatToolbarModule,FormsModule,ReactiveFormsModule,],
  templateUrl: './store-login.component.html',
  styleUrl: './store-login.component.scss'
})
export class StoreLoginComponent implements OnInit{
  form!: FormGroup<any>;
  submitted:boolean=false;
  StrongPasswordRegx: RegExp =/^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\D*\d).{8,}$/;
  constructor(protected auth:AuthService,protected router:Router,private formBuilder: FormBuilder){

  }
  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.form = new FormGroup({
      email: new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',[Validators.required,Validators.minLength(8),
      Validators.pattern(this.StrongPasswordRegx)]),
    })
  }

  get f(){
    return this.form.controls;
  }

  login(){
    this.submitted =true;
    if(this.form.valid){
      this.auth.loginAuthentication(this.form.value).subscribe((res)=>{
        localStorage.setItem("access_token",res?.response?.refresh_token);
        this.router.navigateByUrl("/products");
      });
      this.submitted = false;
      this.form.reset();
    }
  
  }

}
