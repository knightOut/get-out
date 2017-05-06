import { Injectable } from '@angular/core';
import {Place } from '../objects/place';
import {SearchData } from '../objects/searchData';


@Injectable()
export class SearchService {

    private results: Place[];

    public getResults(): Place[]{
        return this.results;
    }

   public getRecommendation(searchDate: SearchData, location: string): void {
       //TODO: send the search parameters and get the recommendation from the server
     this.results = [{
       id: 1,
       name: 'גפניקה',
       image: 'assets/japnika.jpg',
       visible: true,
       details: "רשת מסעדות אסייאתיות בפריסה ארצית כתובת: סינמה סיטי ראשון לציון . טלפון: 03-7236100 . שעות פתיחה: פתוח היום · 12:00–01:00",
       distance: 1.5,
       location: {lat: 31.9837996,lng :34.7713177}
     },
       {
         id: 2,
         name: 'מוזס',
         image: 'assets/moses.jpg',
         visible: true,
         details: "רשת המבורגר כתובת: סינמה סיטי ראשון לציון . טלפון: 03-7164666 . שעות פתיחה: פתוח היום · 12:00–01:00",
         distance: 1.5,
         location: {lat: 31.9837996,lng :34.7713177}
       },
       {
         id: 3,
         name: 'גירף',
         image: 'assets/giraf.jpg',
         visible: true,
         details: "רשת מסעדות אסייתיות כתובת: סינמה סיטי ראשון לציון . טלפון: 03-9592400 . שעות פתיחה: פתוח היום · 12:00–01:00",
         distance: 1.5,
         location: {lat: 31.9837996,lng :34.7713177}
       },
       {
         id: 4,
         name: 'ארומה אספרסו בר',
         image: 'assets/aroma.jpg',
         visible: true,
         details: "קפה ארומה כתובת: קניון הבאר ראשון לציון . טלפון: 03-9514194 . שעות פתיחה: פתוח היום · 07:30–12:00",
         distance: 0.7,
         location: {lat: 31.975855, lng: 34.7734844}
       },
       {
         id: 5,
         name: 'שגב אקספרס',
         image: 'assets/segev.jpg',
         visible: true,
         details: "מסעדת שף: ילדי טהרן 5 ראשון לציון . טלפון: 03-9527563 . שעות פתיחה: פתוח היום · 09:00–12:00",
         distance: 1.5,
         location: {lat: 31.9837996,lng :34.7713177}
       }
     ];
   }
 }
