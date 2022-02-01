import { Component, OnInit } from '@angular/core';
import { ContentService } from '../content.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contact:any[];
  constructor(private cs:ContentService) { }

  ngOnInit(): void {
    this.loadContact();
  }

  loadContact(){
    this.contact = this.cs.getContact()
  }

}
