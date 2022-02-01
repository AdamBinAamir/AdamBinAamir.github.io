import { Component, OnInit } from '@angular/core';
import { ContentService } from '../content.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  services:any[];
  constructor(private cs:ContentService) { }

  ngOnInit(): void {
    this.loadServices();
  }

  loadServices(){
    this.services=this.cs.getServices();
  }

}
