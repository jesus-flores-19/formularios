import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactivo',
  templateUrl: './reactivo.component.html',
  styleUrls: ['./reactivo.component.css']
})
export class ReactivoComponent implements OnInit {

  forma: FormGroup;

  constructor(public fb: FormBuilder) {
    this. forma = this.obtenerFormulario();
    this.cargarData();
   }

   obtenerFormulario(){
      return this.fb.group({
        nombre: ["", [Validators.required, Validators.minLength(3)]],
        apellido: ["", [Validators.required, Validators.minLength(3)]],
        correo: ["", [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{3,4}$")]],
        direccion: this.fb.group({
          municipio: ["", [Validators.required, Validators.minLength(3)]],
          estado: ["", [Validators.required, Validators.minLength(3)]]
        }),
        pasatiempos: this.fb.array([
          [],[],[]
        ])
      });
   }

   cargarData(){
    //Existen dos maneras de cargar datos, creo que la conveniente sea con set value:. 
    this.forma.reset({
      nombre: "Jesus",
      apellido: "Flores",
      correo: "jesus19arath@gmail.com",
      direccion: {
        estado: "Enamorado",
        municipio: "Morelos"
       }
      });
      //La otra es reseteando el formulario
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

   get estadoEsValido(){
     return this.forma.get("direccion.estado")?.invalid && this.forma.get("direccion.estado")?.touched
   }

   get municipioEsValido(){
    return this.forma.get("direccion.municipio")?.invalid && this.forma.get("direccion.municipio")?.touched
   }

   get direccionEsValido(){
    return this.estadoEsValido || this.municipioEsValido;
   }



   guardar(){
     if(this.forma.invalid){
       Object.values(this.forma.controls).forEach(control => {
         if(control instanceof FormGroup){
            Object.values(control.controls).forEach(control => control.markAsTouched())
         }else{
           control.markAsTouched();
         }
         return;
       })
     }
     console.log(this.forma);


     //Reseteando formulario
     this.forma.reset(
       {
        nombre: "Chinguen a su madre"
       }
     )
     
   }

  ngOnInit(): void {
  }

}
