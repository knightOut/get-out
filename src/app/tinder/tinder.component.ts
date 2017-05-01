import {Component} from '@angular/core';
import {TinderService} from "./tinder.service";
import {Place} from "../objects/place";
import {Router} from "@angular/router";

@Component({
  selector: 'app-tinder',
  templateUrl: './tinder.component.html',
  styleUrls: ['./tinder.component.css']
})
export class TinderComponent {

  nearbyPlaces: Place[];
  likePlace : Array<Place>;
  currentIndex : number;
  currentPlace: Place;

  SWIPE_ACTION = {LEFT: 'swipeleft', RIGHT: 'swiperight'};

  constructor(private tinderService: TinderService, private router: Router) {
    this.nearbyPlaces = tinderService.nearbyPlace('myPlace');//need to find my place
    this.likePlace = new Array();
    this.currentIndex = 0;
    this.currentPlace= this.nearbyPlaces[this.currentIndex];

  }
  onLike() {
    this.likePlace.push(this.nearbyPlaces[this.currentIndex]);
    this.nextPlace();
  }
  onDisLike() {
    this.nextPlace();
  }
  private nextPlace() {
    this.currentIndex++;
    if(this.currentIndex === this.nearbyPlaces.length)
      this.endLikes();

    this.currentPlace = this.nearbyPlaces[this.currentIndex];
  }

  swipe( action: string) {

    // like
    if (action === this.SWIPE_ACTION.RIGHT) {
      this.onLike();
    }

    // deslike
    if (action === this.SWIPE_ACTION.LEFT) {
      this.onDisLike();

    }

    // toggle avatar visibility

  }
  endLikes() {
    this.tinderService.SendlikePlacesToServer(this.likePlace);
    this.router.navigate(['/search']);

  }

}
