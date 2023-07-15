import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-requestsupport',
  templateUrl: './requestsupport.component.html',
  styleUrls: ['./requestsupport.component.scss']
})
export class RequestsupportComponent implements OnInit{

  constructor(/* private http: HttpClient */){}

  AddSupportForm!: ;

 /*  AddSupportForm = new FormGroup({
    name : new FormControl(""),
    date : new FormControl(""),
    topic : new FormControl(""),
    description : new FormControl("")
  }); */

  ngOnInit(): void {}
  
  onSubmitForm(){
    /* this.addSupport(); */
    console.log("hola");
    console.log(this.AddSupportForm.value);
  }

/*   addSupport(){
    this.http.post<any[]>('http://localhost:8000/support', {title: 'Angular post request'})
    .subscribe(createSupport => 
      {
         createSupport.push(this.AddSupportForm.value); 
          console.log(this.AddSupportForm.value);
          console.log(createSupport);
      });
  }  */

}
