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
        name: 'המסעדה',
        image: 'https://www.imageupload.co.uk/images/2017/04/23/resturnat.png',
        visible: true,
        title: 'title',
        distance: 0.4,
        location: {lat: 32.0662, 
                  lng: 34.7778}        
      },
      {
          id: 2,
        name: 'סינמה סיטי',
        image: 'https://www.imageupload.co.uk/images/2017/04/23/cinema-city.png',
        visible: false,
        title: 'מסעדת בשרים',
        distance: 0.4,
          location: {lat: 34.0662, 
                  lng: 37.7778}    
      },
      {
          id: 3,
        name: 'retro bar',
        image: 'https://www.imageupload.co.uk/images/2017/04/23/Retro.jpg',
        visible: false,
        title: 'title',
        distance: 0.4,
          location: {lat: 30.0662, 
                  lng: 34.7778}    
      },
      { id: 4,
        name: 'יודלה',
        image: 'https://www.imageupload.co.uk/images/2017/04/23/yudla.jpg',
        visible: false,
        title: 'title',
        distance: 0.4,
          location: {lat: 31.0662, 
                  lng: 31.7778}    
      },
      {
          id: 5,
        name: 'puppets',
        image: 'https://www.imageupload.co.uk/images/2017/04/23/puppets.png',
        visible: false,
        title: 'title',
        distance: 0.4,
        location: {lat: 39.0662, 
                  lng: 34.7778}    

      }
    ];
   }
 } 
    