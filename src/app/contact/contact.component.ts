import { Component, OnInit } from '@angular/core';

import { User } from './user';
import {FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import {ContactService} from '../contact.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {


  ngOnInit() {
  }

 
  title = 'Contacts Form';

  User: User;
  myForm: FormGroup;

  constructor (private fb:FormBuilder, private contactService:ContactService) {
    this.myForm = this.fb.group({
      name: ['',[Validators.compose([Validators.required])]],
      surName: ['',[Validators.compose([Validators.required])]],
      message: ['',[Validators.compose([Validators.required])]]
    });
  }

  save(model: User, isValid: boolean) {
    console.log(model, isValid);
  }

  testMethod() {
    console.log('hy there');
  }

  changeFlag(){
  
  this.contactService.contactsFlag = false;
  }

}
