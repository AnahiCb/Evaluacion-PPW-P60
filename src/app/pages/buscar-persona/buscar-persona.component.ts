import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/domain/persona/persona.component';
import { StorageService } from 'src/app/service/storage.service';
import {OrderListModule} from 'primeng/orderlist';

@Component({
  selector: 'app-buscar-persona',
  templateUrl: './buscar-persona.component.html',
  styleUrls: ['./buscar-persona.component.scss']
})
export class BuscarPersonaComponent implements OnInit {

  personas: any;
  listaPersonas:any;
  confirmar: boolean = false;

  persona: Persona = new Persona;

  constructor(private router: Router, private orderLM:  OrderListModule, private stororageService: StorageService) { }

  ngOnInit(): void {

    this.personas = this.stororageService.getPersonas();
    console.log(this.personas);

    this.personas.subscribe((data: any) => {
      console.log("datos:", data);
      this.listaPersonas = data;
    })
  
  }

  abrir(){
    this.router.navigate(['cargar-persona']);
  }
}
