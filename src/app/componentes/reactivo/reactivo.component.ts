import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { ValidadoresService } from 'src/app/service/validadores.service';

@Component({
  selector: 'app-reactivo',
  templateUrl: './reactivo.component.html',
  styleUrls: ['./reactivo.component.css']
})
export class ReactivoComponent implements OnInit {

  forma: FormGroup;

  constructor(public fb: FormBuilder, private validadores: ValidadoresService) {
    this. forma = this.obtenerFormulario();
    this.cargarData();
   }

   obtenerFormulario(){
      return this.fb.group({
        nombre: ["", [Validators.required, Validators.minLength(3)]],
        apellido: ["", [Validators.required, Validators.minLength(3), this.validadores.noHerrera]],
        correo: ["", [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{3,4}$")]],
        usuario: ["", [Validators.required]],
        pass1: ["", [Validators.required]],
        pass2: ["", [Validators.required]],
        direccion: this.fb.group({
          municipio: ["", [Validators.required, Validators.minLength(3)]],
          estado: ["", [Validators.required, Validators.minLength(3)]]
        }),
        pasatiempos: this.fb.array([
        ])
      },{
        validators: this.validadores.passwords("pass1", "pass2")
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
       },
       pass1: "123",
       pass2: "123"
      });

      //Cargar datos del arreglo formArrat
      ["Elemento 1", "Elemento 2"].forEach(value => this.pasatiempos.push(this.fb.control(value)))
      //La otra es reseteando el formulario

      console.log(this.forma);
      
   }

   agregarPasatiempos(){
     this.pasatiempos.push( this.fb.control("Nuevo Elemento") )
   }
   borrarPasatiempo(i: number){
     this.pasatiempos.removeAt(i);
   }

   get pasatiempos(){
     return this.forma.get("pasatiempos") as FormArray;
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

   get usuarioEsValido(){
     return this.forma.get("usuario")?.invalid && this.forma.get("correo")?.touched;
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
   get pass1EsValido(){
     return this.forma.get("pass1")?.invalid && this.forma.get("pass1")?.touched
   }
   get pass2EsValido(){
     const pass1 = this.forma.get("pass1")?.value;
     const pass2 = this.forma.get("pass2")?.value;
    
     return (pass1 == pass2) ? false : true;
   }



   guardar(){
     if(this.forma.invalid){
       Object.values(this.forma.controls).forEach(control => {
         if(control instanceof FormGroup){
            Object.values(control.controls).forEach(control => control.markAsTouched())
         }else{
           control.markAsTouched();
         }
       })
       return;
     }
     console.log(this.forma);


     //Reseteando formulario
     this.forma.reset(
       {
        nombre: "Jesus"
       }
     )
     
   }

  ngOnInit(): void {
  }

}
