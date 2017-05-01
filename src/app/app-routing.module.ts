import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent }   from './login/login.component';
import { FormValidationComponent } from './form/form.component';
import { TinderComponent }  from './tinder/tinder.component';
import { ReviewPlaceComponent }  from './review-place/review-place.component';
import {ResultsComponent} from './results/results.component';
import { RankComponent } from './rank/rank.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login',  component: LoginComponent },
  { path: 'search', component: FormValidationComponent },
  { path: 'likes',     component: TinderComponent },
  { path: 'review',     component: ReviewPlaceComponent } ,
  { path: 'results', component: ResultsComponent},
  { path: 'rank', component: RankComponent}
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
