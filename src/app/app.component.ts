import { Component } from '@angular/core';
import {ContactService} from './contact.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dynamic Contact Form';
  
  constructor(private contactService:ContactService){
   this.contactService.contactsFlag = false;
  }

  changeFlag(){
    this.contactService.contactsFlag = true;
  }
  
}
