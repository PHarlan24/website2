import { Component, Input } from "@angular/core";

@Component({
    selector: 'fm-entertainment-newsinbrief',
    templateUrl: 'entertainment-newsinbrief.component.html',
    styleUrls: ['entertainment-newsinbrief.component.css'] 
    
})
export class EntertainmentNewsInBriefComponent{
    @Input() subtitle: string;
    @Input() title: string;
    @Input() img: string;
    

    constructor(){
        this.subtitle = "XXX";
        this.title = "????";
        this.img = "/assets/search.jpg";
     }
}