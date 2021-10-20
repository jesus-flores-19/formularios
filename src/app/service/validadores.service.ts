import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidadoresService {

  constructor() { }

  noHerrera(control: FormControl){
    if(control.value?.toLowerCase() === "herrera"){
      return{
        noHerrera: true
      }
    }
    return null;
  }

  passwords(pass1: string, pass2: string){
    return (formGroup: FormGroup) => {
      const paswword1 = formGroup.controls[pass1]
      const paswword2 = formGroup.controls[pass2]
      if(paswword1.value === paswword2.value){
        paswword2.setErrors(null)
      }else{
        paswword2.setErrors({
          noEsIgua: true
        })
      }
    }
  }
}
