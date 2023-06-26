import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { PersonneService } from '../personne.service';

@Component({
  selector: 'app-update-personne',
  templateUrl: './update-personne.component.html',
  styleUrls: ['./update-personne.component.css']
})
export class UpdatePersonneComponent  implements OnInit {
  personne: any = [];
  updatePersonneFrom: FormGroup;
  
  ngOnInit() {
    this.updateForm()
  }
  constructor(
    private actRoute: ActivatedRoute,    
    public personneService: PersonneService,
    public fb: FormBuilder,
    private ngZone: NgZone,
    private router: Router
  ) { 
    var id = this.actRoute.snapshot.paramMap.get('id');
    this.personneService.getPersonne(id).subscribe((data) => {
      this.updatePersonneFrom = this.fb.group({
        Id: [data.Id],
        firstName: [data.firstName],
        lastName: [data.lastName],
        address: [data.address],
        birthDay : [data.birthDay],
        phone: [data.phone]
      })
    })
  }
  updateForm(){
    this.updatePersonneFrom = this.fb.group({
      Id: null,
      firstName: [''],
      lastName: [''],
      address: [''],
      birthDay: [''],
      phone: ['']
    })    
  }
  submitForm(){ 
    var id = this.actRoute.snapshot.paramMap.get('id');
    this.personneService.updatePersonne(Number(id), this.updatePersonneFrom.value).subscribe(res => {
      this.ngZone.run(() => this.router.navigateByUrl('/'))
    })
  }
}