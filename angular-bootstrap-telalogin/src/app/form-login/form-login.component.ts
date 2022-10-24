import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {

  form:FormGroup;

  constructor(
    private formBuilder:FormBuilder) {

    this.form = this.formBuilder.group({
      email:[null, [Validators.required, Validators.email]],
      pass:[null, [Validators.required, Validators.minLength(8)]],

    });
   }
  verificaInvalid(campo:string){
    return this.form.get(campo)?.invalid && this.form.get(campo)?.touched
    }
  verificaValid(campo:string){
    return this.form.get(campo)?.valid
  }

  cssFb(campo:string){
    return{

      'is-invalid': this.verificaInvalid(campo),
      'invalid-feedback':this.verificaInvalid(campo),

      'is-valid': this.verificaValid(campo),
      'valid-feedback':this.verificaValid(campo)

    }

  }
  submit(){
    console.log(this.form.value)

  }
  ngOnInit(): void {
  }

}
