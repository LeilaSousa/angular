
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  email:string = ''
  pass:string =''

  constructor() { }

  ngOnInit(): void {
  }

  submit(){

  console.log('form');

  }

}
