import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
 

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  constructor(public http: HttpClient) { }


  private paises= [
    {idpais: "MEX", nombre: "México"},
    {idpais: "COL", nombre: "Colombia"},
    {idpais: "BRA", nombre: "Brasil"},
    {idpais: "EU", nombre: "Estados Unidos"},
    {idpais: "CAN", nombre: "Canada"},
  ]


  obtenerPaises(){
    return this.paises;
  }
}
