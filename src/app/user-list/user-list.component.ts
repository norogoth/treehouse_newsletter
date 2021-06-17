import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

type User = {
  name: string;
  email: string;
  id: string;
  created_on: string;
};

type ComparableUser = {
  name: string;
  email: string;
  id: string;
  dateTime: number;
};

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  loaded: boolean = false;
  th_url: string = 'https://treehousechallenge.contractornation.com';
  user_list: ComparableUser[] = [];

  constructor() { }

  sortUsersByDate(users: User[]) {
    let comparableUsers: ComparableUser[] = [];
    users.forEach(user => {
      let userDate = new Date(user.created_on);
      let thisCU:ComparableUser = {
        name: user.name,
        email: user.email,
        id: user.id,
        dateTime: userDate.getTime()
      };
      comparableUsers.push(thisCU);
    });
    comparableUsers.sort((a,b) => b.dateTime - a.dateTime)
    return comparableUsers;
  }

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
      const sortedList = this.sortUsersByDate(json);
      this.user_list = sortedList;
      console.log(json);
      this.loaded = true;
    })
  }


  ngOnInit(): void {
    this.getUsers();
  }

}
