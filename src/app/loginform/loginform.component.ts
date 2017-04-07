import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {
  username:string 
  password: string
  constructor() { }

  ngOnInit() {
  }

  get loginJson(){
    return JSON.stringify({
      username : this.username,
      password:this.password
    })
  }

}
