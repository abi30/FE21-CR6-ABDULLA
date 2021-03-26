import { Product } from './../models/product';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products:Product[]=[
    new Product(1,"France","It has tourist sights for all tastes; it has some of the greatest beaches in Europe, as well as mountains",new Date("Fri Oct 18 2021 13:30:50"),"2D & 3N",450,"travelProduct1.jpg"),
    new Product(2,"USA","Tourism in the United States is a large industry that serves millions of international and domestic tourists yearly.",new Date("Fri Aug 15 2021 13:30:50"),"3D & 4N",900,"travelProduct2.jpg"),
    new Product(3,"UK","Our traditional pubs and stately homes are looking forward to giving you a warm British welcome when travel ",new Date("Fri Nov 8 2021 13:30:50"),"2D & 3N",650,"travelProduct3.jpg"),

    new Product(4,"China","China is located in eastern Asia along the western shore of the Pacific Ocean.",new Date("Fri Jun 26 2021 13:30:50"),"2D & 3N",750,"travelProduct4.jpg"),
    new Product(5,"Austria","Austria, one of Europe's most popular holiday destinations, attracts tourists year-round with places to",new Date("Fri May 1 2021 13:30:50"),"2D & 2N",250,"travelProduct5.jpg"),
    
    new Product(6,"Australia","Australia is world famous for its natural wonders and wide open spaces, its beaches, deserts, the b",new Date("Fri Sep 20 2021 13:30:50"),"7D & 7N",1100,"travelProduct6.jpg"),

    new Product(7,"Brazil","Brazil offers for both domestic and international tourists an ample range of options deserts, the Outback.",new Date("Sat Jul 6 2021 13:30:50"),"6D & 6N",800,"travelProduct7.jpg"),

    new Product(8,"Egypt","Tourism is one of the leading sources of income, crucial to Egypt's economy.  about 12% of workforce of Egypt",new Date("Fri Nov 26 2021 13:30:50"),"3D & 4N",700,"travelProduct8.jpg"),

    new Product(9,"India","Tourism in India is important for the country's economy and is growing rapidly. The calculated that tourism ",new Date("Sun Oct 2 2021 13:30:50"),"5D & 6N",1000,"travelProduct9.jpg"),

    new Product(10,"Italy","People mainly visit Italy for its rich culture, cuisine, history, fashion and art, its beautiful its mountains",new Date("Mon Sep 11 2021 13:30:50"),"2D & 3D",300,"travelProduct10.jpg")
  ];

  constructor() { }



  getProducts():Product[]{
    return this.products;

  }


}
