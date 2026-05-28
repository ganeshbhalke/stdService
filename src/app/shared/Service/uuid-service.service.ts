import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UuidServiceService {


  constructor() { }
  
  uuid(){
    return Date.now()
  }
}
