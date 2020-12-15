import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Paquete } from 'src/app/clases/paquete';
import { PaqueteService } from 'src/app/servicios/paquete.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

  paqueteForm: FormGroup;
  
  paquetes: any[] = [];
  idPaquete: any;

  paquete : any;
  param: any;

  constructor(private route: ActivatedRoute, private fb: FormBuilder, private router: Router, private paqueteService: PaqueteService) { }

  ngOnInit(): void {
    debugger;
    this.getPaquete();
    this.param = this.route.snapshot.params;

    if (Object.keys(this.param).length) {
      this.paquete = this.param;
    } 

    this.initForm(this.paquete);

    this.route.paramMap.subscribe((param) => {
			debugger;
			this.idPaquete = param.get('id');

			if (this.idPaquete !== 'new') {
				this.getPaqueteById(this.idPaquete);
			}
    });
    
  }

  
  initForm(editarPaquete : Paquete){
    this.paqueteForm = this.fb.group({
      nombreRemit : [editarPaquete ? editarPaquete.nombreRemit:'', Validators.required],
      direccionRemit : [editarPaquete ? editarPaquete.direccionRemit:'', Validators.required],
      nombreDestin : [editarPaquete ? editarPaquete.nombreDestin:'', Validators.required],
      direccionDestin : [editarPaquete ? editarPaquete.direccionDestin:'', Validators.required],
      descripcionPaq : [editarPaquete ? editarPaquete.descripcionPaq:'', Validators.required],
      fechaEntrega : [editarPaquete ? editarPaquete.fechaEntrega:'', Validators.required]
    
    });
  }

 
 getPaquete(){
    this.paqueteService.getPaquetes().subscribe((paquetes: any) => {
      this.paquetes = paquetes;
    });
  }

  getPaqueteById(idPaquete: String) {
		this.paqueteService.getPaqueteById(idPaquete).subscribe((data) => {
			debugger;
			let paqueteId = data;

			this.paqueteForm.patchValue(paqueteId);
		});
  }
  
  submit(){
    debugger;
    if (this.idPaquete){
      this.paqueteService.editarPaquete(this.idPaquete, this.paqueteForm.value).subscribe((paquete) => {
      });
    } else{
      this.paqueteService.guardarPaquete(this.paqueteForm.value).subscribe(paquete => {
        let paqueteNuevo = paquete;
      });
    }

    this.router.navigate(['/mostrarPaquete']);
    
  }

}
