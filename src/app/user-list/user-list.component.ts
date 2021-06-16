import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  th_url: string = 'https://treehousechallenge.contractornation.com';
  user_list = {};

  constructor() { }

  getUsers() {
    console.log('running this.getUsers()');
    fetch(this.th_url+'/newsletter',{
      method: 'GET',
      headers: {
       Authorization: environment.API_KEY, 
      },
    })
    .then( res => {
      console.log('res:', res);
      return res.json()
    })
    .then(json => {
      this.user_list = json;
      console.log(json);
    })
  }

  postUser(name: string, email: string){
    fetch(this.th_url+'/newsletter',{
      method: 'POST',
      headers: {
       Authorization: environment.API_KEY, 
      },
      body: JSON.stringify({
        name: name,
        email: email
      })
    })
    .then( res => {
      console.log('res:', res);
      return res.json()
    })
    .then(json => {
      this.user_list = json;
      console.log(json);
    })
  }

  ngOnInit(): void {
    this.getUsers();
  }

}
