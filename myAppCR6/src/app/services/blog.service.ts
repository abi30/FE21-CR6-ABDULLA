import { Injectable } from '@angular/core';
import { Blog } from '../models/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {


  blogs:Blog[]=[





    new Blog(1,"turkish mosque ","The Hagia Sophia has just opened to receive Sunni Muslim worshippers for the first time since 1931.",new Date("Fri Jan 18 2015 13:30:50"),"places1.jpg"),
   
    new Blog(2,"Eiffel Tower","The Eiffel Tower is 1,063 feet (324 meters) tall, including the antenna at the top. Without the antenna, it is 984 feet 300 m.",new Date("Fri Jan 08 2013 12:44:57"),"places3.jpg"),

    new Blog(3,"time Square","Times Square is a major commercial intersection, tourist destination, entertainment center, and neighborhood in the Midtown Manhattan.",new Date("Fri Feb 28 2012 07:44:57"),"places4.jpg"),

    

    new Blog(4,"concert stadthalle","In 1956, Vienna acquired the Vienna Stadthalle, thanks to architect Roland Rainer, as a flagship for modern concerts and shows",new Date("Fri Dec 08 2020 07:44:57"),"events1.jpg"),




    new Blog(5,"stadium dhaka","It was hard to get the tickets, but a kindly young chap from Singapore had helped this stranger buy the tickets.",new Date("Fri Dec 08 2019 07:44:57"),"events4.jpg"),

    new Blog(6,"convention hall","A convention center is a large building that is designed to hold a convention, where individuals and groups gather to promote and share common interests.",new Date("Sun Dec 08 2018 18:30:00"),"events2.jpg"),



    new Blog(7,"Medusa Restaurant & Club","there’s anybody who’s fit to navigate Vienna’s approximately 4,000 restaurants, it’s Lukas Hittinger",new Date("Fri Jan 05 2021 09:44:57"),"restaurants1.jpg",),

    new Blog(8,"Eater At Home","When traveling through China, you may have trouble finding your most beloved beverages from back home",new Date("Fri Dec 11 2014 21:44:57"),"restaurants4.jpg"),

    new Blog(9,"Tawa Indian Restaurant","If you love Indian food, you’re probably familiar with chicken tikka masala, which appears on most Indian restaurant menus",new Date("Sat Oct 20 2017 07:44:57"),"restaurants5.jpg"),




  ];

  constructor() { }


getBlogs():Blog[]{
  return this.blogs;

}

}
