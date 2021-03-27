import { Blog } from './../../models/blog';
import { BlogService } from './../../services/blog.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  blogList:Blog[];
  constructor(private blogService:BlogService) { }

  ngOnInit(): void {
    this.blogList=this.blogService.getBlogs();
    // console.log(this.blogList)
  }

}
