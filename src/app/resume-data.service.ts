import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResumeDataService {
 // data: any = {};
  static data: any;
  static add(data){
   this.data = data;

 }
 

  constructor() { }
}
