import { Component, OnInit } from '@angular/core';
import { ContentService } from '../content.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  about:any[];

  constructor(private cs:ContentService) { }

  ngOnInit(): void {
    this.loadAbout();
  }
  loadAbout(){
    this.about=this.cs.getAbout();
  }

}
