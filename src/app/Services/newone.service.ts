import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewoneService {
  empl1:string[]=["Swapnil Sonawane",'E1','sonawaneswapnil2647@gmail.com']
  empl2:string[]=["Siddhesh Mhatre",'E2','siddheshmhatre345@gmail.com']
  empl3:string[]=["Kumar Gharat",'E3','kumargharat145@gmail.com']

  getinfo1():string[]{
    return this.empl1
  }
  getinfo2():string[]{
    return this.empl2
  }
  getinfo3():string[]{
    return this.empl3
  }



  constructor() { }
}
