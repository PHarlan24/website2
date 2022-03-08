import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MockNewsInBriefModel } from "./mock_newsinbrief.model";

@Injectable({
    providedIn: 'root'
})
export class EntertainmentService{
    private baseUrl: string = "https://the-onion-c187d-default-rtdb.firebaseio.com/";
    private entertainmentEndpoint: string = "news.json";

    constructor(private http:HttpClient){
        
    }
    public getNews(){
        return this.http.get<MockNewsInBriefModel []>(this.baseUrl + this.entertainmentEndpoint);
    }

    public getNew(index:number){
        return this.http.get<MockNewsInBriefModel>(this.baseUrl + 'news/' + index + '.json');
    }
}