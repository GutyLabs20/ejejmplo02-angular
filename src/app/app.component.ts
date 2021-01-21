import { Component } from '@angular/core';
import { Empleado } from './models/empleado';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  posicion: number = -1;

  title = "Registro de Empleado";

  actual:Empleado = new Empleado();

  empleados = [
    new Empleado( 'Juan', 'USA'),
    new Empleado( 'Pedro', 'USA'),
    new Empleado( 'Luis', 'USA'),
  ];

  registrar():void{

    if (this.posicion == -1) {
      this.empleados.push(this.actual);
    } else {
      this.empleados[this.posicion].nombre = this.actual.nombre;
      this.empleados[this.posicion].pais = this.actual.pais;

    }

    this.actual = new Empleado();

  }

  presentarEmpleado(indice: number): void {

    this.actual = new Empleado(
      this.empleados[indice].nombre,
      this.empleados[indice].pais);
    this.posicion = indice;

  }

}
