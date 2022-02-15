import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LastestComponent } from 'src/navigation/lastest.component';
import { HomeLayoutComponent } from 'src/navigation/home-layout.component';
import { NewsComponent } from 'src/navigation/news.component';
import { LocalComponent } from 'src/navigation/local.component';
import { EntertainmentComponent } from 'src/navigation/entertainment.component';
import { PoliticsComponent } from 'src/navigation/politics.component';

const routes:Routes = [
  {
path: '',
component: HomeLayoutComponent
  },
{
  path: 'latest', 
component: LastestComponent 
},
{
  path: 'home',
  component: HomeLayoutComponent
},
{
  path: 'news',
  component: NewsComponent
},
{
  path: 'local',
  component: LocalComponent
},
{
  path: 'entertainment',
  component: EntertainmentComponent
},
{
  path: 'politics',
  component: PoliticsComponent
}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { 
}
