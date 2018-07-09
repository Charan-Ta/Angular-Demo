import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private username:string;
  constructor() { }

  getUsername(){
    return this.username;
  }
  setUsername(username:string){
    this.username=username;
  }

}
