import {  Injectable } from "@angular/core";


Injectable({
  providedIn:'root'
})
export interface Istudent
{
   name: string;
  email: string;
  course: string;
  price:number
  stdId:number;

}