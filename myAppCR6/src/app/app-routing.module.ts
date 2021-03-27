import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from 'src/app/components/contact/contact.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';

const routes: Routes = [

  // 
  {path:"",pathMatch:"full",redirectTo:"/"},
  // {path:"",component:NavComponent},
  {path:"blog",component:BlogComponent},
  {path:"shoppingTravel",component:ShoppingCartComponent},
  {path:"about",component:AboutComponent},
  {path:"contact", component: ContactComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
