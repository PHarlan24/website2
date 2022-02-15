
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TopNavBarComponent } from 'src/navigation/topnavbar.component';
import { CardComponent } from 'src/card/card.component';
import { MainStoryComponent } from 'src/story/mainstory.component';



import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LastestComponent } from 'src/navigation/lastest.component';
import { HomeLayoutComponent } from 'src/navigation/home-layout.component';
import { NewsComponent } from 'src/navigation/news.component';
import { LocalComponent } from 'src/navigation/local.component';
import { EntertainmentComponent } from 'src/navigation/entertainment.component';
import { PoliticsComponent } from 'src/navigation/politics.component';



@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    CardComponent,
    MainStoryComponent,
    LastestComponent,
    HomeLayoutComponent,
    NewsComponent,
    LocalComponent,
    EntertainmentComponent,
    PoliticsComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
