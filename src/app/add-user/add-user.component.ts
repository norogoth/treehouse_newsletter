import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment'

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  th_url: string = 'https://treehousechallenge.contractornation.com';

  postUser(data: any){
    fetch(this.th_url+'/newsletter',{
      method: 'POST',
      headers: {
       Authorization: environment.API_KEY, 
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email
      })
    })
    .then( res => {
      console.log('res:', res);
      return res.json()
    })
    .then(json => {
      console.log(json);
    })
  }

  constructor() { }

  ngOnInit(): void {

  }

}
