import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {
 
  @ViewChild('miFormulario') miFormulario!: NgForm;

  initForm = {
    producto: "Rtx 4090",
    precio: 10,
    existencia: 10
  }

  constructor() { }

  ngOnInit(): void {
  }

  // guardar(miFormulario: NgForm){
  //   console.log( miFormulario.value );
  // }

  nombreValido():boolean{
    return this.miFormulario?.controls.producto?.invalid && 
    this.miFormulario?.controls.producto?.touched
  }

  precioValido():boolean{  
  return this.miFormulario?.controls.precio?.value < 0 &&
      this.miFormulario?.controls.precio?.touched;
  }

  existenciaInvalido():boolean{
    return this.miFormulario?.controls.existencia?.invalid && 
      this.miFormulario?.controls.existencia?.touched
  }

  guardar(){
    // console.log(this.miFormulario.value)
    this.miFormulario.resetForm({
      producto:'algo',
      precio:0,
      existencia:0
    });
    // if(this.miFormulario?.controls.precio?.value < 0){
    //   console.log('no posteado')
    //   return;
    // }
  }

}
