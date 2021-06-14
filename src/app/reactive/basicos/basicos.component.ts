import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Form, Validators, Validator } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  // miFormulario: FormGroup= new FormGroup({
  //   nombre    : new FormControl('RTX 4080 ti'),
  //   precio    : new FormControl(1000),
  //   existencia: new FormControl(30)
  // })

  miFormulario: FormGroup = this.formBuilder.group({
    nombre      : [, [Validators.required, Validators.minLength(3)] ],
    precio      : [, [Validators.required, Validators.min(0) ] ],
    existencia  : [, [Validators.required, Validators.min(0)] ]
  })
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(){
    this.miFormulario.reset({
      nombre:'RTX',
      precio: 123123
    })
  } 

  campoEsValido( campo: string){
    return this.miFormulario.controls[campo].invalid 
    && this.miFormulario.controls[campo].touched;
  }

  guardar(){

    if( this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
      return;
    }
    console.log(this.miFormulario.value);
    this.miFormulario.reset();
  }
}

