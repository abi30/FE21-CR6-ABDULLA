export class Product {

    id:number;
    destination:string;
    description:string;
    startDate:Date;
    duration:string;
    price:number;
    imgUrl:String;


    constructor(id,destination,description,startDate,duration,price=0,imgUrl="assets/img/default.jpg"){

        this.id=id;
        this.destination=destination
        this.description=description
        this.startDate=startDate
        this.duration=duration
        this.price=price
        this.imgUrl=imgUrl
    }


}
