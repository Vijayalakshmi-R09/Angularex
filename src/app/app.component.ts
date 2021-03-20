import { Component } from '@angular/core';
import Product from './model/child';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyApp';
  myName:string="Vijayalakshmi R";    
  institute:string="Ethiraj";
  company:string="SRM Tech";
  fruits='';
  myproduct:Product[]=[];
  public gurl:string="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/diy-paper-flowers-1582662788.jpg?crop=0.631xw:0.945xh;0.0128xw,0.0504xh&resize=640:*";
  public secondurl:string="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp52OJE5BU6itcdr6xgCoiI27H2UEVvgOKLA&usqp=CAU";
  ButtonEvent() { 
    alert('Successfully executed'); 
   } 
  constructor(){
    setTimeout(()=>{
      this.gurl=this.secondurl;
      this.title="Flowers";
      console.log("Images Displayed");
    },6000);
    this.myproduct=[
      {Pid:1,PName:"Tomato",desc:"Vegetable",cost:100},
      {Pid:2,PName:"Beans",desc:"Vegetables",cost:75},
      {Pid:3,PName:"Vinegar",desc:"food",cost:75},
    ];
  }
  public handlemyName(e:any){
    this.myName=e.target.value;
    console.log(`Name is ...${e.target.value}`);
  }
  public keyEntryfn(en:any){
    this.institute=en.target.value;
    console.log(`Institue-> ${en.target.value}`);
  }
  public keyupShiftA(eve:any){
    this.myName=eve.target.value;
    console.log(`Name-. ${eve.target.value}`);
  }
  public handleSubmit(sub:any){
    this.company=sub
    console.log(`Company Name-> ${sub}`)
  }
  public handleDisplay(dis:any){
    this.fruits=dis
    console.log(`Selected Fruit-> ${dis}`)
  }
}




