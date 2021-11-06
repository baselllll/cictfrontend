import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './Components/landing-page/landing-page.component';
import { HeaderComponent } from './Components/Layout/header/header.component';
import { FooterComponent } from './Components/Layout/footer/footer.component';
import { SlideShowComponent } from './Components/landing-page/slide-show/slide-show.component';
import { SignInComponent } from './Components/sign-in/sign-in.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { ExploreProductsComponent } from './Components/explore-products/explore-products.component';
import { StripeModule } from "stripe-angular";


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HeaderComponent,
    FooterComponent,
    SlideShowComponent,
    SignInComponent,
    SignUpComponent,
    ExploreProductsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule,ReactiveFormsModule, HttpClientModule,FormsModule,StripeModule.forRoot("pk_test_51JEgToCAlmE8w7N1BhcxIjbQkLH7qOx1sk5GZpzbB6QzQLtMBCDdZcP2JlQzRCgpeOW8Kk0jNkyjEKmVyx21QOYE00uYP8trKO") ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
