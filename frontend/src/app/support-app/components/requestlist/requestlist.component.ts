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


  supports: any[] = []; 

ngOnInit(): void {
    this.readSupport();
}


readSupport(){

  this.http.get<any[]>('http://localhost:8000/support')
  .subscribe(createSupport => 
    {
      this.supports =  createSupport;
       
    });


}

AddSupport(){
this.router.navigate(['/SupportAdd']);
}
}
