import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  public nombreApellidoPatter: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  public emailPattern        : string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  constructor(
    private http: HttpClient
  ) { }

  noPuedeSer = (control: FormControl): ValidationErrors | null => { 
    const valor:string = control.value?.trim();
    if(valor === 'chevchelios'){
      return{
        noPuedeSer: true
      }
    }
    return null;
  }

  camposIguales(campo1: string, campo2: string){
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const pass1 = formGroup.get(campo1)?.value?.trim();
      const pass2 = formGroup.get(campo2)?.value?.trim();

      if(pass1 !== pass2){
        formGroup.get(campo2)?.setErrors({camposIguales: true})
        return {camposIguales: true}
      }

      formGroup.get(campo2)?.setErrors(null)
      return null;
    }
  }

}
