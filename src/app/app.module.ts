import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';

import { SidenavAutosizeExample } from './app.component';

@NgModule({
  declarations: [
    SidenavAutosizeExample
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [SidenavAutosizeExample]
})
export class AppModule { }
