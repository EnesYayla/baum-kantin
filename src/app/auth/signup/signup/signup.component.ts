import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  siteImage:string = '../../../../assets/Tea.png';
  logo:string = '../../../../assets/Anadolu.png'
  name:string = '';
  email: string = '';
  password:string = '';
  role:string = '';
  roles:string[];
  constructor() {
    this.roles =[
      'Admin','Kullanıcı'
    ]
  }

  ngOnInit(): void {
  }
  signup(){
    console.log(this.name + " " +  this.email + " " + this.password + " " + this.role)
  }

}
