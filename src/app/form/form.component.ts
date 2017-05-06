import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {SearchService} from './form.service';
import {Place } from '../objects/place';
import {routerTransition} from "../router.animations";


@Component({
  selector: 'form-validation',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class FormValidationComponent {
  complexForm : FormGroup;
  status = 'active';
  searchResult: Place[];

  constructor(fb: FormBuilder, private router: Router,   private searchService: SearchService){
    this.complexForm = fb.group({
      'budget' : [null, Validators.required],
      'transport' : [null, Validators.required],
      'group' : [null, Validators.required],
      'restaurent' : [false],
      'bar' : [false],
      'caffe' : [false],
      'concert' : [false],
      'movie' : [false]
    })

    this.complexForm.valueChanges.subscribe( (form: any) => {
      var x  = 90;
      }
    );
  }

  submitForm(value: any) {
    this.status = 'loading';
    this.searchService.getRecommendation(this.complexForm.value, 'loc');
    this.searchResult = this.searchService.getResults();
    window.setTimeout(() => {
      this.router.navigate(['/results']);
    }, 3000);

  }
}
