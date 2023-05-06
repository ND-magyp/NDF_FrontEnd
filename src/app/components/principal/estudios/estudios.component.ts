import { Component, OnInit } from '@angular/core';
import { Estudios } from 'src/app/entidades/Estudios';
import { EstudiosService } from 'src/app/servicios/estudios.service';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit {

  estudios: Estudios[]=[];

  constructor(

    private servicio: EstudiosService,
    ) { }

    listarItems(): void{
    this.servicio.listItems().subscribe(data =>{
      this.estudios=data;
    });
  }

  ngOnInit(): void {
    this.listarItems();
  }

}
