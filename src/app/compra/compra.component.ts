import { Component, OnInit } from '@angular/core';
import {CarritoService} from '../carrito.service';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit 
{
  formulario: FormGroup;
  nombreValid: Boolean = true;
  lastNameValid: Boolean = true;
  DirValid: Boolean = true;
  mailValid: Boolean = true;
  cardNumValid: Boolean = true;
  cvvValid: Boolean = true;
  mesValid: Boolean = true;
  yearValid: Boolean = true;

  constructor(private carService: CarritoService, private router:Router) { 
    this.formulario = new FormGroup({
      inputName: new FormControl('',[Validators.required,Validators.minLength(5)]),
      inputLastName: new FormControl('',[Validators.required,Validators.minLength(5)]),
      inputDir: new FormControl('',[Validators.required,Validators.minLength(10)]),
      inputMail: new FormControl('',[Validators.required]),
      inputCardNum: new FormControl('',[Validators.required,Validators.minLength(16),Validators.maxLength(16)]),
      inputCVV: new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(3)]),
      inputMes: new FormControl('',[Validators.required]),
      inputYear: new FormControl('',[Validators.required])
    });
  }

  ngOnInit() {
    
  }

  frmSubmit(form:FormGroup){
    this.nombreValid = form.controls['inputName'].valid;
    this.lastNameValid = form.controls['inputLastName'].valid;
    this.DirValid = form.controls['inputDir'].valid;
    this.mailValid = form.controls['inputMail'].valid;
    this.cardNumValid = form.controls['inputCardNum'].valid;
    this.cvvValid = form.controls['inputCVV'].valid;
    this.mesValid = form.controls['inputMes'].valid;
    this.yearValid = form.controls['inputYear'].valid;
  }

}
