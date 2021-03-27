export class Blog {


    id:number;
    blogName:string;
    description:string;
    date:Date;
    imgUrl:String;


    constructor(id,name,description,date,imgUrl="assets/img/default.jpg"){

        this.id=id;
        this.blogName=name
        this.description=description
        this.date=date
        this.imgUrl=imgUrl
    }
}
