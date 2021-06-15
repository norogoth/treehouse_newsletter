import { Component, OnInit } from '@angular/core';

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
        
      },
    })
    .then( res => {
      console.log('res:', res);
      return res.json()
    })
    .then(json => {
      this.user_list = json;
    })
  }

  ngOnInit(): void {
    this.getUsers();
  }

}
