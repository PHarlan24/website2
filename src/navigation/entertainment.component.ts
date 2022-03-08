import { Component, OnInit } from "@angular/core";
import { EntertainmentService } from "./entertainment.service";
import { mock_list_entertainment} from "./mock_list_entertainment";
import { MockNewsInBriefModel } from "./mock_newsinbrief.model";

@Component({
    selector: 'fm-entertainment',
    templateUrl: 'entertainment.component.html',
    styleUrls: ['entertainment.component.css'] 
})
export class EntertainmentComponent implements OnInit{
    products: MockNewsInBriefModel[] = [];

    constructor(private entertainmentService:EntertainmentService) {
    
    }
    ngOnInit(): void {
        this.entertainmentService.getNews().subscribe(data => {
            console.log("Fetching product data");
            for (var product of data){
            console.log(product);
            this.products.push(product);

            }
        })
    }
}