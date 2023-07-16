import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, NgForm, ReactiveFormsModule, FormGroup, FormControl, FormsModule, Form } from '@angular/forms';


@Component({
  selector: 'app-requestsupport',
  templateUrl: './requestsupport.component.html',
  styleUrls: ['./requestsupport.component.scss']
})
export class RequestsupportComponent implements OnInit{

  constructor( private http: HttpClient){}


AddSupportForm!: FormGroup; 


  ngOnInit(): void {
   this.AddSupportForm = new FormGroup({
    name1: new FormControl(),
    date: new FormControl(),
    topic: new FormControl(),
    description: new FormControl(),
   });
  }


  
  onSubmitForm(): void {
    console.log("hola");
    console.log(this.AddSupportForm.get('name1')?.value);
    this.addSupport();
  }

   addSupport(): void {
    this.http.post<any[]>('http://localhost:8000/support.json', this.AddSupportForm.value)
    .subscribe(createSupport => 
      {
         createSupport.push(this.AddSupportForm.value); 
          console.log(this.AddSupportForm.value);
          console.log(createSupport);
      });
  }  

}
