import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';

/**
 * @title Autosize sidenav
 */
@Component({
  selector: 'sidenav-autosize-example',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})
export class SidenavAutosizeExample {
  @ViewChild('sidenav') sidenav: MatSidenav;

  // click on VERY top left house icon to open and close sidenav
  // if you open it, then stays open
  // if you close it, then opens and closes with mouse entry/exit
  isExpanded = true;  // i.e. sidenav opened/closed

  // if sidenav is "partially" closed, as soon as you mouse over partically closed sidenave, then set this to true
  // and when you mouse out of the sidenav (partially closed or open), sidenave goes back to partially closed
  isShowing = false;

  showSubmenu: boolean = false;
  showSubSubMenu: boolean = false;

  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }
}


