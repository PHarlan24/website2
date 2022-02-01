
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TopNavBarComponent } from 'src/navigation/topnavbar.component';
import { CardComponent } from 'src/card/card.component';
import { MainStoryComponent } from 'src/story/mainstory.component';


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    CardComponent,
    MainStoryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
