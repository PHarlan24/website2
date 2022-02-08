import { Component, Input} from "@angular/core";

@Component({
   selector: 'fm-card',
   templateUrl: 'card.component.html',
   styleUrls: ['card.component.css'] 
})
export class CardComponent{
   @Input() img: string;
   @Input() description: string;
   
   constructor(){
      this.img = "/assets/rangoon.jpg";
      this.description = "Error";
   }

}