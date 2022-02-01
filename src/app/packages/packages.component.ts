import { Component, OnInit } from '@angular/core';
import { ContentService } from '../content.service';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})
export class PackagesComponent implements OnInit {
  packages:any[];

  constructor(private cs:ContentService) { }

  ngOnInit(): void {
    this.loadPackages();
  }
  loadPackages(){
    this.packages = this.cs.getPackages()
  }

}
