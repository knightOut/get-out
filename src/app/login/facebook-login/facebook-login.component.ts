import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';


declare const FB:any;

@Component({
  selector: 'facebook-login',
  templateUrl: './facebook-login.component.html',
  styleUrls: ['./facebook-login.component.css']
})

export class FacebookLoginComponent implements OnInit {

  constructor(private router: Router) {
    FB.init({
      appId      : '256873068058465',
      cookie     : true,  // enable cookies to allow the server to access
      // the session
      xfbml      : true,  // parse social plugins on this page
      version    : 'v2.5' // use graph api version 2.5
    });
  }

  onFacebookLoginClick() {
   FB.login(function(response){
   console.log(response);
   },
   {scope: 'email,user_likes'});
  }

  statusChangeCallback(resp) {
    if (resp.status === 'connected') {
      this.router.navigate(['/likes']);

      // connect here with your server for facebook login by passing access token given by facebook
    }else if (resp.status === 'not_authorized') {
      console.log('no facebook');
    }else {

    }
  };
  ngOnInit() {
    FB.getLoginStatus(response => {
      this.statusChangeCallback(response);
    });
  }
}
