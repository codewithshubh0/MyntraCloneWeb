declare var google:any ;
import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone :true,
  imports:[CommonModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

private route = inject(Router);
token_payload:string='';
ngOnInit(): void {
    google.accounts.id.initialize({
      client_id: '715455586358-5ioiohg7dcltino6obafvtoirc82dhgg.apps.googleusercontent.com',
      callback: (resp:any)=>{
          this.handleLogin(resp);
           }
    });

    
  google.accounts.id.renderButton(document.getElementById("google-btn"),{
    theme:'filled_blue',
    size:'large',
    shape:'rectangle', 
    width:350
  })
  }
// private decodetoken(token:string){
//   return JSON.parse(atob(token.s))
// }

handleLogin(response:any){
  
  //extrct payload part from crediential
  this.token_payload = response.credential.split(".")[1];

  // decode payload to get info
  var decoded_token = JSON.parse(atob(this.token_payload.toString()));
  sessionStorage.setItem("loggedInUser",JSON.stringify(decoded_token));

  this.route.navigate(['']);
}
}
