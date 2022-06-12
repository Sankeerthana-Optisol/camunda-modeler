import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  private xml: string

  getXMl(){
    return this.xml
  }
  setXML(xml: string){
    this.xml = xml
  }
}
