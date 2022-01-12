import { Component, Input, OnInit } from '@angular/core';
import { NavigationItem } from 'carbon-components-angular';

@Component({
  selector: 'app-header-fluid',
  templateUrl: './header-fluid.component.html',
  styleUrls: ['./header-fluid.component.scss']
})
export class HeaderFluidComponent implements OnInit {
  
  NavigationItem=[
    {
      type: "item",
      content: "Catalog",
      title: "Catalog"
    },
    {
      type: "item",
      content: "Docs",
      isCurrentPage: true
    },
    {
      type: "item",
      content: "Support"
    },
    {
      type: "menu",
      title: "Manage",
      menuItems: [
        {
          type: "item",
          content: "Link 1"
        },
        {
          type: "item",
          content: "Link 2"
        },
        {
          type: "item",
          content: "Link 3"
        }
      ]
   }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
