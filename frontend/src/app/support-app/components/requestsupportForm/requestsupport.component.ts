import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, NgForm, ReactiveFormsModule, FormGroup, FormControl, FormsModule, Form } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-requestsupport',
  templateUrl: './requestsupport.component.html',
  styleUrls: ['./requestsupport.component.scss']
})
export class RequestsupportComponent implements OnInit{


  constructor( private http: HttpClient, private router: Router){}


AddSupportForm!: FormGroup; 


  ngOnInit(): void {
   this.AddSupportForm = new FormGroup({
    name: new FormControl(),
    date: new FormControl(),
    topic: new FormControl(),
    description: new FormControl(),
   });
  }

  back(){
    this.router.navigate(['']);
  }

  
  onSubmitForm(): void {
    this.addSupport();
  }

   addSupport(): void {
    this.http.post<any[]>('http://localhost:8000/support', this.AddSupportForm.value)
    .subscribe(createSupport => 
      {
          console.log("Añadido con exito");

      });
  }  

}
