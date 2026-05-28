import { Injectable } from '@angular/core';
import { Istudent } from '../modules/student';
import { UuidServiceService } from './uuid-service.service';
import { Observable,of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {


  constructor( 
    private _studentservice:UuidServiceService
  ) { }

  

  stdArr:Array<Istudent> = [
    {
    name: 'Priya Sahu',
    email: 'sahu@example.com',
    course: 'FullStack',
    price: 60000,
    stdId:this._studentservice.uuid()
        
    },
    {
    name: 'ganesh bhalke',
    email: 'gana@gmail.com',
    course: 'MEAN Stack development',
    price: 100000,
    stdId:this._studentservice.uuid()
        
    },
    {
    name: 'shrinivas biradar',
    email: 'sb@gamil.com',
    course: 'FullStack',
    price: 60000,
    stdId:this._studentservice.uuid()
        
    }
  ]


editstd$=new Subject<Istudent>();

  fetchAllStd():Observable<Istudent[]> {
  return of(this.stdArr) 
}



createpost(stdobj:Istudent){
  this.stdArr.unshift(stdobj)
}


UpdatePost(updateobj:Istudent){
const getIndex=this.stdArr.findIndex(n => n.stdId === updateobj.stdId)
this.stdArr[getIndex]=updateobj;
}


Delete(stdId:number){
  let getIndex=this.stdArr.findIndex(n =>n.stdId==stdId)
  this.stdArr.splice(getIndex,1)
}


}
