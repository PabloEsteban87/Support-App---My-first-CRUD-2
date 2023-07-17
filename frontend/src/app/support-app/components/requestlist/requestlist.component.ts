import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-requestlist',
  templateUrl: './requestlist.component.html',
  styleUrls: ['./requestlist.component.scss']
})
export class RequestlistComponent implements OnInit{


  constructor( private http: HttpClient, private router: Router){}

  fecha!: Date;

  supports: any[] = []; 

ngOnInit(): void {
    this.readSupport();
}


readSupport(){

  this.http.get<any[]>('http://localhost:8000/support')
  .subscribe(createSupport => 
    {


     /*  Object.values(createSupport).forEach(key => console.log((key.date)/(1000*60*60*24*365.25))); */
     Object.values(createSupport).forEach(key => 
      console.log(this.fecha = key.date));
  

    




      this.supports =  createSupport;
       
    });


}

AddSupport(){
this.router.navigate(['/SupportAdd']);
}


}
