import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class PaqueteService{
   httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    }
    private paqueteUrl = 'http://localhost:3002/api/modules/paquetes/';

    constructor(private httpClient: HttpClient){}

    getPaquetes(){
        return this.httpClient.get(this.paqueteUrl + 'paquete');
    }
    
    getPaqueteById(idPaquete: String) {
		return this.httpClient.get(this.paqueteUrl + 'paqueteId/' + idPaquete);
	}

    guardarPaquete(paquete: any){
        return this.httpClient.post(this.paqueteUrl + 'paquete', JSON.stringify(paquete), this.httpOptions); 
    }

    editarPaquete(idPaquete, paquete){
        return this.httpClient.put(this.paqueteUrl + 'paquete/' + idPaquete, JSON.stringify(paquete), this.httpOptions);
    }

    borrarPaquete(idPaquete){
        return this.httpClient.delete(this.paqueteUrl + 'paquete/' + idPaquete, this.httpOptions);
    }

}