import { Component, OnInit } from '@angular/core';
import { EntertainmentService } from 'src/navigation/entertainment.service';
import { MockNewsInBriefModel } from 'src/navigation/mock_newsinbrief.model';

@Component({
  selector: 'fm-add-story',
  templateUrl: './add-story.component.html',
  styleUrls: ['./add-story.component.css']
})
export class AddStoryComponent implements OnInit {

  constructor(public ps: EntertainmentService) { }

  ngOnInit(): void {
  }
  addNews(product : MockNewsInBriefModel){
    console.log("You clicked add product");
    console.log(product);
    this.ps.addNews(product);
  }

}
