import { Component, OnInit } from '@angular/core';
import { ContentService } from '../content.service'
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  services:any[];
  about:any[];
  footer:any[];

  constructor(private cs:ContentService) { }

  ngOnInit(): void {
    this.loadServices();
    this.loadAbout();
    this.loadFooter();
  }

  loadServices(){
    this.services=this.cs.getServices();
  }

  loadAbout(){
    this.about = this.cs.getAbout();
  }

  loadFooter(){
    this.footer = this.cs.getFooter();
  }
}
