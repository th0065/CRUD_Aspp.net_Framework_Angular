import { Component, OnInit,NgZone } from '@angular/core';
import { PersonneService } from '../personne.service';
import { FormBuilder, FormGroup  } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-personne',
  templateUrl: './create-personne.component.html',
  styleUrls: ['./create-personne.component.css']
})
export class CreatePersonneComponent implements OnInit {


personneForm:FormGroup;
personne:any=[];

ngOnInit(): void {
  
 this.addPersonne();
}

constructor(
  public fb: FormBuilder,
  private ngZone: NgZone,
  private router: Router,
  public personneService: PersonneService
) {}

addPersonne() {
  this.personneForm = this.fb.group({
    firstName: [''],
    lastName: [''],
    address: [''],
    birthDay: [''],
    phone: [''],
  });
}

submitForm(){
  this.personneService.createPersonne(this.personneForm.value)
  .subscribe((res)=>{
    console.log('Infos ajoutées');
    alert("Infos Ajoutées");
    this.ngZone.run(()=>this.router.navigateByUrl('/'));
  });
}

}
