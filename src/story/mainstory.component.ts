import { Component,Input } from "@angular/core";

@Component({
   selector: 'fm-mainstory',
   templateUrl: 'mainstory.component.html',
   styleUrls: ['mainstory.component.css'] 
})
export class MainStoryComponent{

   @Input() img: string;
   @Input() title: string;
   @Input() description: string;

   constructor(){
      this.img = "/assets/search.png";
      this.title = "XXXX";
      this.description = "No description";
   }
}