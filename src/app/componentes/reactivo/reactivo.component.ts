import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactivo',
  templateUrl: './reactivo.component.html',
  styleUrls: ['./reactivo.component.css']
})
export class ReactivoComponent implements OnInit {

  forma: FormGroup;

  constructor(private fb: FormBuilder) {
    this.forma = this.fb.group({
      nombre: ["", [Validators.required, Validators.minLength(3)]],
      apellido: ["", [Validators.required, Validators.minLength(3)]],
      correo: ["", [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{3,4}$")]],
      direccion: this.fb.group({
        municipio: [""],
        estado: [""]
      })
    });
   }

   get nombreEsValido(){
      return this.forma.get("nombre")?.invalid && this.forma.get("nombre")?.touched;
   }

   get apellidoEsValido(){
    return this.forma.get("apellido")?.invalid && this.forma.get("apellido")?.touched;
   }

   get correoEsValido(){
    return this.forma.get("correo")?.invalid && this.forma.get("correo")?.touched;
   }



   guardar(){
     if(this.forma.invalid){
       Object.values(this.forma.controls).forEach(control => {
         control.markAsTouched();
         return;
       })
     }
     console.log(this.forma);
     
   }

  ngOnInit(): void {
  }

}
