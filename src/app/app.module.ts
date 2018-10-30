import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppChild1Component } from './child1/app-child1.component';
import { AppChild2Component } from './child2/app-child2.component';
import { OutSideEventHandlerDirective } from './directives/outside-event-handler.directive';

@NgModule({
  declarations: [
    AppComponent,
    AppChild1Component,
    AppChild2Component,
    OutSideEventHandlerDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
