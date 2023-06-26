import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { PersonneService } from '../personne.service';


@Component({
  selector: 'app-details-personne',
  templateUrl: './details-personne.component.html',
  styleUrls: ['./details-personne.component.css']
})
export class DetailsPersonneComponent  {
  personne: any = [];
  detailsForm: FormGroup;
  
  
  constructor(
    private actRoute: ActivatedRoute,    
    public personneService: PersonneService,
    public fb: FormBuilder,
    
  ) { 
    var id = this.actRoute.snapshot.paramMap.get('id');
    this.personneService.getPersonne(id).subscribe((data) => {
      this.detailsForm = this.fb.group({
        firstName: [data.firstName],
        lastName: [data.lastName],
        address: [data.address],
        birthDay : [data.birthDay],
        phone: [data.phone]
      })
    })
  }
 
 
}