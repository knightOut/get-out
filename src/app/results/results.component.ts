import { Component, OnInit } from '@angular/core';
import {Place } from '../objects/place';
import { ActivatedRoute, Router } from '@angular/router';
import {SearchService} from '../form/form.service';
import {ResultsService} from './results.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  image: string;
  nearbyPlaces: Place[];
  sub: any;
  id: number;
  

  constructor( private router: Router, 
               private route: ActivatedRoute,
               private searchService: SearchService,
               private resultsService: ResultsService) {
    this.image = 'http://semantic-ui.com/images/avatar2/large/kristy.png';
  }

  ngOnInit() {
    this.nearbyPlaces = this.searchService.getResults(); 
  }
  selectPlace(selectedPlace: Place){
    this.resultsService.setSelectedPlace(selectedPlace);
    
    this.router.navigate(['/review']);
  }
}
