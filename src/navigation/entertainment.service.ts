import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MockNewsInBriefModel } from "./mock_newsinbrief.model";
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
    providedIn: 'root'
})
export class EntertainmentService{
    constructor(private db:AngularFireDatabase){
        
    }
    public getNews(){
        return this.db.list<MockNewsInBriefModel>("products").valueChanges();
    }

    public getNew(index:number){
        
    }
}