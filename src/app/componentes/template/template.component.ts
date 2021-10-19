import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaisesService } from 'src/app/service/paises.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  constructor(public paisService: PaisesService) { 
    this.obtenerPaises();
  }

  paises:any = []
  usuario: any = {
    nombre: "",
    apellido: "",
    email: "",
    pais: ""
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

  obtenerPaises(){
    this.paises = this.paisService.obtenerPaises();
    
  }

}
