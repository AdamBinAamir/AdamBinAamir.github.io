import { Component } from '@angular/core';
import { ContentService } from './content.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  title = 'webquraninn';

  contact: any[];
  footer:any[];
  
  constructor(private cs:ContentService){ }

  ngOnInit(): void {
    this.loadFooter();
    this.loadContact();
  }

  loadContact(){
    this.contact = this.cs.getContact()
  }
  loadFooter(){
    this.footer = this.cs.getFooter()
  }

}