import { Component, Input } from "@angular/core";
import { mock_list_latest } from "./mock_list_latest";
import { MockNewsModel } from "./mock_news.model";

@Component({
    selector: 'fm-lastest',
    templateUrl: 'lastest.component.html',
    styleUrls: ['topnavbar.component.css'] 
})
export class LastestComponent{
        products: MockNewsModel[] = [];
    
        constructor() {
            for(var product of mock_list_latest){
                console.log(product);
                this.products.push(product);
            }
        }
    }
     