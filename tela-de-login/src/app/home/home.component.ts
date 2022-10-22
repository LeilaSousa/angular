import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  msgLogin:string = 'Seja bem-vindo! Faça login para acessar a sua conta.'

  display:boolean = true

  constructor() { }

  ngOnInit(): void {
  }

}
