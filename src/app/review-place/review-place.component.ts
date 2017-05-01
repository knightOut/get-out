import { Component, OnInit } from '@angular/core';
import {SebmGoogleMap} from 'angular2-google-maps/core';
import {Router} from "@angular/router";
import {Place} from "../objects/place";
import {ResultsService} from '../results/results.service';


@Component({
  selector: 'app-review-place',
    host: {      class:'review-place'
    },
  templateUrl: './review-place.component.html',
  styleUrls: ['./review-place.component.css']
})
export class ReviewPlaceComponent {
  place: Place;

  constructor(private router: Router, private resultsService: ResultsService) { }
    ngOnInit() {
      this.place = this.resultsService.getSelectedPlace();
    }
    
    rankPlace() {
      this.router.navigate(['/rank']);
  }
}
