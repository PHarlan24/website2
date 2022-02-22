import { Component, Input } from "@angular/core";

@Component({
    selector: 'fm-latest-news',
    templateUrl: 'latest-news.component.html',
    styleUrls: ['latest-news.component.css'] 
    
})
export class LatestNewsComponent{
    @Input() subtitle: string;
    @Input() title: string;
    @Input() img: string;
    @Input() description: string;

    constructor(){
        this.subtitle = "XXX";
        this.title = "????";
        this.img = "/assets/search.jpg";
        this.description = "Error";
     }
}