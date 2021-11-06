import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { HomeComponent } from './home/home.component';
import { MyProductsComponent } from './my-products/my-products.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    MyProductsComponent,
    EditProfileComponent,
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
   
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProfileModule { }
