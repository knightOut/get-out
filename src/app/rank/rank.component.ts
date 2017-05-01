import { Component, OnInit } from '@angular/core';
import {ResultsService} from '../results/results.service';
import {Place} from "../objects/place";
import {RankService} from './rank.service';

@Component({
  selector: 'rank',
  templateUrl: './rank.component.html',
  styleUrls: ['./rank.component.css']
})
export class RankComponent implements OnInit {
  place: Place;
  
  constructor(private resultsService: ResultsService, private rankService: RankService) { }
  
  ngOnInit() {
    this.place = this.resultsService.getSelectedPlace();
  }
  send(){
    this.rankService.sendReview(5, "bla bla");
    //TODO: send the review to the server
  }
}
