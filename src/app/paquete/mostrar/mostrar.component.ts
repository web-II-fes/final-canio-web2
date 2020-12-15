import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PaqueteService } from 'src/app/servicios/paquete.service';
import { CrearComponent } from '../crear/crear.component';

@Component({
  selector: 'app-mostrar',
  templateUrl: './mostrar.component.html',
  styleUrls: ['./mostrar.component.css']
})
export class MostrarComponent implements OnInit {

    displayedColumns: string[] = ['nombreRemit', 'direccionRemit', 'nombreDestin', 'direccionDestin', 'descripcionPaq', 'fechaEntrega', 'borrar', 'editar'];
    dataSource : any[] = [];
    idPaquete: any;
    paqueteForm: FormGroup;

    constructor(private paqueteService : PaqueteService, private router : Router) { }

    ngOnInit(): void {
    debugger;
    this.getPaquetes();
    }

    getPaquetes(){
      this.paqueteService.getPaquetes().subscribe((data: any) => {
        
        this.dataSource = data;
      });
    }

    recibePaquete(paquete : CrearComponent){

      this.dataSource.push(paquete);
    }

    borrarPaquete(paquete: any){
      this.idPaquete = paquete._id;
      this.paqueteService.borrarPaquete(this.idPaquete).subscribe( respuesta  => {
      let borrarPaquete = paquete;
      });
      this.ngOnInit();
    }

    editarPaquete(idPaquete) {

      this.router.navigate(['/crear/' + idPaquete]);
      
      debugger;	
    }


}
