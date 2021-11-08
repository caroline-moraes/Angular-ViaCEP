import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CEP, ceps } from '../cep';
import { ViacepService } from '../viacep.service';

@Component({
  selector: 'app-cep-details',
  templateUrl: './cep-details.component.html',
  styleUrls: ['./cep-details.component.css']
})
export class CepDetailsComponent implements OnInit {

  cep: CEP | undefined;
  
  constructor(private route: ActivatedRoute, private viacepService: ViacepService) { }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const cepFromRoute = String(routeParams.get('cep'));
    
    //this.cep = ceps.find(cep => cep.cep === cepFromRoute);
    this.viacepService.getCep(cepFromRoute).subscribe(cep => this.cep = cep);
  }

}
