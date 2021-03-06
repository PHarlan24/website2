
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
import { LatestNewsComponent } from 'src/navigation/latest-news.component';
import { EntertainmentNewsInBriefComponent } from 'src/navigation/entertainment-newsinbrief.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AddStoryComponent } from './newstory/add-story/add-story.component';
import { FormsModule } from '@angular/forms';
import { AuthenticationComponent } from './auth/authentication/authentication.component';






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
    PoliticsComponent,
    LatestNewsComponent,
    EntertainmentNewsInBriefComponent,
    UserInfoComponent,
    AddStoryComponent,
    AuthenticationComponent
  
    


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
