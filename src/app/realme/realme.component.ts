import { Component, OnInit } from '@angular/core';
import { NewoneService } from '../Services/newone.service';

@Component({
  selector: 'app-realme',
  templateUrl: './realme.component.html',
  styleUrls: ['./realme.component.css']
})
export class RealmeComponent implements OnInit{
      constructor(private wax:NewoneService){}
   storeHere1:string[]=[];
   storeHere2:string[]=[];
   storeHere3:string[]=[];
ngOnInit(): void {
  
}
firstOne(){
  this.storeHere1=this.wax.getinfo1()
}
secondOne(){
  this.storeHere2=this.wax.getinfo2()
}
thirdOne(){
  this.storeHere3=this.wax.getinfo3()
}

}
