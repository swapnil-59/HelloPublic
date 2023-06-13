import { Component, OnInit } from '@angular/core';
import { NewoneService } from '../Services/newone.service';

@Component({
  selector: 'app-empl-id',
  templateUrl: './empl-id.component.html',
  styleUrls: ['./empl-id.component.css']
})
export class EmplIdComponent implements OnInit{

  infoReceived1:string[]=[];
  infoReceived2:string[]=[];
  infoReceived3:string[]=[];

  getInfoFromServiceClass1(){
    this.infoReceived1=this.none.getinfo1()
  }
  getInfoFromServiceClass2(){
    this.infoReceived2=this.none.getinfo2()
  }

  getInfoFromServiceClass3(){
    this.infoReceived3=this.none.getinfo3()
  }


           constructor(private none:NewoneService){

           }
           ngOnInit(): void {
             
           }
}
