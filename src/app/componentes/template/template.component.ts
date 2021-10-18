import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  constructor() { }

  usuario: any = {
    nombre: "",
    apellido: "",
    email: ""
  }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    if(form.invalid) {
      Object.values(form.controls).forEach(control => {
        control.markAsTouched();
      })
    };
    console.log(form.value);
  }

}
