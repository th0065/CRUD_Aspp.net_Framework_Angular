import { Component,OnInit } from '@angular/core';
import { Personne } from '../personne';
import { PersonneService } from '../personne.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-personne',
  templateUrl: './list-personne.component.html',
  styleUrls: ['./list-personne.component.css']
})
export class ListPersonneComponent {
personne:any=[];
page:number = 1;
count:number = 0;
tableSize:number= 5;
tableSizes:any=[2,4,6,8];

constructor(private personneService: PersonneService,
  private router:Router) {}

  ngOnInit():void{
    this.getPersonnes();
  }

  private getPersonnes(){
    this.personneService.getPersonnesList().subscribe( 
      (response)=>{
        this.personne=response;
        console.log(response);
      },
      (error)=>{
        console.log(error);
      }
    );
  }

  onTableDataChange(event:any){
  this.page = event;
  this.getPersonnes();
}
onTableSizeChange(event: any): void {
  this.tableSize = event.target.value;
  this.page = 1;
  this.getPersonnes();
}

  personneDetails(Id:number){
    this.router.navigate(['personne-details', Id]);
  }

  updatePersonne(Id:number){
    this.router.navigate(['update-personne', Id]);
  }

  deletePersonne(data){
    var index = index = this.personne.map(x => {return x.firstName}).indexOf(data.firstName);
     return this.personneService.deletePersonne(data.Id).subscribe(res => {
      this.personne.splice(index, 1)
       console.log('Infos supprimés!');
       alert('Infos supprimés!');
     })
  }
}

