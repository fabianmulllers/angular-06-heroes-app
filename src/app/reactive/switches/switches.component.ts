import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, Validator } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit{

  miFormulario: FormGroup = this.formBuilder.group({
    genero:['M',Validators.required],
    notificaciones:[false,Validators.required],
    condiciones:[false,  Validators.requiredTrue]
  })

  persona ={
    genero:'F',
    notificaciones: true,
  }

  constructor(private formBuilder: FormBuilder) { }
  
  ngOnInit(){
    this.miFormulario.reset({...this.persona, condiciones: false })

    // this.miFormulario.get('condiciones')?.valueChanges
    // .subscribe(
    //   condicion => {
    //     console.log(condicion)
    //   }
    // )

    this.miFormulario.valueChanges
    .subscribe(
      ({condiciones, ...rest}) => {
        // delete form.condiciones
        this.persona = rest;
      }
    )
  }

  guardar(){
    const formValue = {...this.miFormulario.value};
    delete formValue.condiciones;
    this.persona = formValue;
    console.log(formValue);
  }

}
