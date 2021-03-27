import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactUs = new FormGroup({
    name: new FormControl('', Validators.requiredTrue),
    email: new FormControl(''),
    message: new FormControl('')
   });
   
  constructor() {  }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.contactUs.value);
  }
}
