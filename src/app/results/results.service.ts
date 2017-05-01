import { Injectable } from '@angular/core';
import {Place } from '../objects/place';

@Injectable()
export class ResultsService {

    private selectedPlace: Place;

    public getSelectedPlace(): Place{
        return this.selectedPlace;
    }

    public setSelectedPlace(selected: Place): void{
      this.selectedPlace = selected;
    }
 } 
    