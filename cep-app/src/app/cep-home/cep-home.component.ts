import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-cep-home',
  templateUrl: './cep-home.component.html',
  styleUrls: ['./cep-home.component.css']
})
export class CepHomeComponent implements OnInit {

  cep: string | undefined;

  constructor(private formBuilder: FormBuilder,
    private route: Router) { }

  ngOnInit(): void {
  }

  cepForm = this.formBuilder.group({
    cep: ''
  });

  onSubmit(): void {
    this.cep = this.cepForm.value.cep;
    this.route.navigateByUrl(`cep/${this.cep}`);
    console.warn('Pesquisa submetida', this.cepForm.value);
    //this.cepForm.reset();
  }
}
