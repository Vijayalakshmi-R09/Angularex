import { Component, Input, OnInit } from '@angular/core';
import Product from 'src/app/model/child';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  @Input()
  public products:Product[]=[];
  //public prod:Product=new Product(0,'','',0);

  constructor() {
    
   }

  ngOnInit(): void {
  }
}
