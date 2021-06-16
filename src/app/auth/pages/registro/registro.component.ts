import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidatorService } from 'src/app/shared/validator/validator.service';
import { nombreApellidoPatter, emailPattern, noPuedeSer } from '../../../shared/validator/validaciones';
import { EmailValidatorService } from '../../../shared/validator/email-validator.service';
import { getParseErrors } from '@angular/compiler';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {

  // TODO



  miFormulario: FormGroup = this.fb.group(
    {
      nombre : ['', [Validators.required, Validators.pattern(this.validatorService.nombreApellidoPatter)] ],
      email : ['', [Validators.required,Validators.pattern(emailPattern)], [this.emailValidator] ] ,
      username : ['', [Validators.required, this.validatorService.noPuedeSer] ],
      password : ['', [Validators.required, Validators.minLength(6)] ],
      password2 : ['', [Validators.required] ],
    },
    {
      validators: [ this.validatorService.camposIguales('password','password2') ]
    }
  )


  get emailErrorMsg(): string {
    const errors = this.miFormulario.get('email')?.errors;
    if( errors?.required ){
      return `email es obligadorio`
    }
    if( errors?.pattern ){
      return `El correo no tiene un formato valido`
    }
    if( errors?.emailExiste ){
      return `El correo ya existe en la plataforma`
    }
    return '';
  }

  constructor(
    private fb: FormBuilder,
    private validatorService: ValidatorService,
    private emailValidator : EmailValidatorService
  ) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre:'Fabian Muller',
      email:'test1@test.com',
      username:'liquidador',
      password:'123456',
      password2: '123456',
    })
  }

  campoNoValido(campo: string){
    return this.miFormulario.get(campo)?.invalid &&
    this.miFormulario.get(campo)?.touched;
  }

  // emailRequired(){
  //   return this.miFormulario.get('email')?.errors?.required &&
  //       this.miFormulario.get('email')?.touched;
  // }

  // emailFormato(){
  //   return this.miFormulario.get('email')?.errors?.pattern &&
  //       this.miFormulario.get('email')?.touched;
  // }

  // emailExiste(){
  //   return this.miFormulario.get('email')?.errors?.emailExiste &&
  //       this.miFormulario.get('email')?.touched;
  // }

  submitFormulario(){
    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();  
      return
    }
    
    console.log(this.miFormulario.value)
  }
}
