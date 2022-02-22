import { Component } from "@angular/core";
import { mock_list_entertainment} from "./mock_list_entertainment";
import { MockNewsInBriefModel } from "./mock_newsinbrief.model";

@Component({
    selector: 'fm-entertainment',
    templateUrl: 'entertainment.component.html',
    styleUrls: ['entertainment.component.css'] 
})
export class EntertainmentComponent{
    products: MockNewsInBriefModel[] = [];

    constructor() {
        for(var product of mock_list_entertainment){
            console.log(product);
            this.products.push(product);
        }
    }
}