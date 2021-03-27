import { CartService } from './../../../services/cart.service';
import { Product } from './../../../models/product';
import { MessengerService } from 'src/app/services/messenger.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';




@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems=[
// {id:1,productId:1,productName:"test 1",qty:3,price:150},
// {id:2,productId:2,productName:"test 2",qty:1,price:200},
// {id:3,productId:3,productName:"test 3",qty:2,price:200},
// {id:4,productId:4,productName:"test 4",qty:2,price:300}
  ];

 cartTotal=0;
 cartTotalWithTenPer=0; 
 cartTotalWithTweentyPer=0; 
  checkoutForm:any;
  public show:boolean = false;
  public buttonName:any = 'Show';

//  dicount=0;
  constructor(private msg:MessengerService,private cartService:CartService,private formBuilder:FormBuilder) { 

    this.checkoutForm = this.formBuilder.group({

      name: '',
  
      address: ''
  
    });

   }

  ngOnInit(): void {

    this.msg.getMsg().subscribe((product:Product)=>{
      // console.log(product)
      this.addProductToCart(product);

    });//getMsg
    
   
   
  }


  addProductToCart(product:Product){

    let productExists=false;
  

    for(let i in this.cartItems){
      if(this.cartItems[i].productId===product.id){
        this.cartItems[i].qty++;
        productExists=true;
        break;
      }
      
     } 
     if(!productExists){
       this.cartItems.push({
      productId:product.id,
      productName:product.destination,
      qty:1,
      price:product.price
    })
    }




      this.cartTotal=0;
      this.cartItems.forEach(item=>{
     
      this.cartTotal+=(item.price*item.qty);

      });

      if(this.cartTotal>=1000){

      this.cartTotalWithTweentyPer=(this.cartTotal-(this.cartTotal*0.2));

      }else if (this.cartTotal>=500){
           
      this.cartTotalWithTenPer=(this.cartTotal-(this.cartTotal*0.1));
          

      }





  }




  onSubmit(customerData:any) {

    // Process checkout data here
  
    console.warn('Your order has been submitted', customerData);
  
     alert(`Your order has been submitted`);
    this.cartItems = this.cartService.clearCart();
  
    this.checkoutForm.reset();
  
  }

  toggle() {
    this.show = !this.show;

    if(this.show)  
      this.buttonName = "Hide";
    else
      this.buttonName = "Show";
  }


}
