import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Persona } from 'src/app/domain/persona/persona.component';
import { PersonasService } from 'src/app/service/personas.service';
import { StorageService } from 'src/app/service/storage.service';

@Component({
  selector: 'app-cargar-persona',
  templateUrl: './cargar-persona.component.html',
  styleUrls: ['./cargar-persona.component.scss']
})
export class CargarPersonaComponent implements OnInit {

  persona: Persona = new Persona();
  personas: any;
  listaPersonas:any;


  constructor(private router: Router, private obraService: PersonasService, private storageService: StorageService, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      console.log(params);

      if(this.router.getCurrentNavigation()?.extras.queryParams){
        let persona = this.router.getCurrentNavigation()?.extras.queryParams?.persona;
        this.persona = persona;
      }
    })
   }

  ngOnInit(): void {

    console.log(this.ngOnInit);

    this.personas = this.storageService.getPersonas();
    console.log(this.personas);
  }

  abrir(){
    this.router.navigate(['buscar-persona']);
  }

  guardar(){ 
    console.log("funciaonaaa ",this.persona);
    let params: NavigationExtras = {
      queryParams: {
        persona : this.persona
      }
    }
    
  }
  

}
