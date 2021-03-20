import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sampcomponent',
  templateUrl: './sampcomponent.component.html',
  styleUrls: ['./sampcomponent.component.css']
})
export class SampcomponentComponent implements OnInit {

  constructor() { }
  val:string="vijayalakshmi";
  ngOnInit(): void {
  }

}
