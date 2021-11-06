import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExploreProductsComponent } from './Components/explore-products/explore-products.component';
import { LandingPageComponent } from './Components/landing-page/landing-page.component';

import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { AuthGuard } from './auth.guard';
import { SignInComponent } from './Components/sign-in/sign-in.component';


const routes: Routes = [
  { path: '', redirectTo: 'sign-in', pathMatch: 'full' },
  { path: 'home', component: LandingPageComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'explore-products', component: ExploreProductsComponent },

  {
    path: 'profile',
    loadChildren: () =>
      import('../app/Components/profile/profile.module').then(
        (m) => m.ProfileModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
