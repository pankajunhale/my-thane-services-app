import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-category',
  templateUrl: './service-category.component.html',
  styleUrls: ['./service-category.component.css'],
})
export class ServiceCategoryComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    debugger;
    console.log({ tz: new Date() });
  }
}
