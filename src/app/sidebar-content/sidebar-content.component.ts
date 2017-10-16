import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-content',
  templateUrl: './sidebar-content.component.html',
  styleUrls: ['./sidebar-content.component.scss']
})
export class SidebarContentComponent implements OnInit {
 fullImagePath: string;

  constructor() {
    this.fullImagePath = './swet_new.png'
  }

  ngOnInit() {
  }

}
