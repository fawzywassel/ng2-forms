import { Component, OnInit } from '@angular/core';

export class User {
  username:string
  password:string
}

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})


export class LoginformComponent implements OnInit {
  
  user:User
  submitted : boolean = false //check if form submitted
  constructor() { }

  ngOnInit() {
    this.user ={
      username:'',
      password:''
    }
  }

  get loginJson(){
    return JSON.stringify(
     this.user
    )
  }

  processForm(){
    console.log(this.user)
    this.submitted = true;
  }

}
