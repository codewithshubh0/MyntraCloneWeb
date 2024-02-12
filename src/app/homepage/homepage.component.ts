import { CommonModule, JsonPipe } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterLink } from '@angular/router';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
declare var google:any ;
@Component({
  selector: 'app-homepage',
  standalone:true,
  imports:[CommonModule,NgbCarouselModule,MatIconModule,RouterLink],
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  ngOnInit(): void {
    if(sessionStorage.getItem("loggedInUser")!=null){
      this.displayname = JSON.parse(sessionStorage.getItem("loggedInUser")!).name;
    }
  }
  displayname = 'Login'; 
  private route = inject(Router);
  showborder= false;
  borderclass = "border-bottom: 4px solid #de0558;text-align: center;flex: 0 0 5em;margin-left: 55px;cursor: pointer;"
  slides:any[] = [
    { url: 'img1.png', title: 'beach' },
    { url: 'img2.png', title: 'boat' },
    { url: 'img3.png', title: 'forest' },
    { url: 'img4.png', title: 'city' },
    { url: 'img5.png', title: 'italy' },
  ];
  slides2:any[] = [
    { url: 'mwbslide1.png', title: 'beach' },
    { url: 'mwbslide2.png', title: 'boat' },
  ];
  slides3:any[] = [
    { url: 'ggbslide1.png', title: 'beach' },
    { url: 'ggbslide2.png', title: 'boat' },
  ];

  signoutuser(){
    google.accounts.id.disableAutoSelect();
    sessionStorage.removeItem("loggedInUser");
    this.route.navigate(['login']);
  }
}
