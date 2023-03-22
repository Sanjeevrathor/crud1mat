import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { leaveModel } from './leaveModel';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  applyleave(data:leaveModel){
   return this.http.post<leaveModel>('http://localhost:3000/posts', data)
  }
  viewLeave(){
    return this.http.get<leaveModel[]>('http://localhost:3000/posts')
  }

  delete(id:number){
    return this.http.delete<leaveModel>('http://localhost:3000/posts/'+id)
  }

  fechdata(id:number){
    return this.http.get<leaveModel>('http://localhost:3000/posts/'+id)
  }

  udpate(data:leaveModel, id:number){
    return this.http.put<leaveModel>('http://localhost:3000/posts/'+id, data)
  }
}
