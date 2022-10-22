
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms'



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  form!: FormGroup;


  constructor(private formBuilder: FormBuilder) {  }

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      pass:[null,[Validators.required]],
    });


  }

  verificaInvalid(campo:string){
    return this.form.get(campo)?.invalid && this.form.get(campo)?.touched;
  }

  verificaValid(campo:string){
    return this.form.get(campo)?.valid;
  }

  cssFeedBack(campo:string){
      return{
        'invalid': this.verificaInvalid(campo),
        'valid':this.verificaValid(campo)
      }
    }


  submit(){
  console.log(this.form?.value);
  }

}
