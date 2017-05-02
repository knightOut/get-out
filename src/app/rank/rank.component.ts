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
  star: string[];
  regular_star: string = "assets/star.png";
  yellow_star: string = "assets/star_yellow.png";
  status = 'active';

  constructor(private resultsService: ResultsService, private rankService: RankService) { }

  ngOnInit() {
    this.clearStars();
    this.place = this.resultsService.getSelectedPlace();
  }

  rank(starNum: number){
    if (this.star[starNum] == this.regular_star)
      this.fillStars(starNum);
    else
    {
      this.clearStars();
      this.fillStars(starNum);
    }
  }

  fillStars(starNum: number){
    this.star[starNum] = this.yellow_star;

      if(starNum > 0)
      this.fillStars(starNum - 1)
  }

  clearStars(){
    this.star = [this.regular_star, this.regular_star, this.regular_star, this.regular_star, this.regular_star];
  }

  send(){
    this.status = 'loading';
    this.rankService.sendReview(5, "bla bla");
    //TODO: send the review to the server
  }
}
