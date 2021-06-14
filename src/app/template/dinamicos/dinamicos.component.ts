import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, Validator } from '@angular/forms';

interface Persona {
  nombre: string,
  favoritos: Favorito[]
}

interface Favorito{
  id: number,
  nombre: string,
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {

  @ViewChild('formulario') formulario!:NgForm

  nuevoJuego:string = "";

  persona: Persona ={
    nombre: 'fabian',
    favoritos: [
      {id:1, nombre:'metal gear'},
      {id:2, nombre:'mario bros'}
    ]
  }

  constructor() { }

  ngOnInit(): void {
  }

  guardar(){
    console.log('formulario posteado');
  }

  // agregarFavorito(){
  //   const id = this.persona.favoritos.length;
  //   this.persona.favoritos.push({'id': id + 1, 'nombre' : this.formulario?.controls.favorito?.value})
  //   this.formulario.controls.favorito.reset();
  // }

  agregarFavorito(){
    const nuevoFavorito: Favorito ={
      id: this.persona.favoritos.length + 1,
      nombre:this.nuevoJuego
    }
    this.persona.favoritos.push({...nuevoFavorito});
    
  }

  eliminarFavorito(id: number){
    this.persona.favoritos.splice(id,1);
  }
  
  nombreIsInvalid(){
    return this.formulario?.controls.nombre?.invalid &&
      this.formulario?.controls.nombre?.touched;
  }
  
} 
