import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public currentTab:String = "";

  constructor(private router: Router) 
  {
    router.events.subscribe((val) => {
      this.currentTab = this.router.url;
      console.log(this.currentTab)
    });
  }

  ngOnInit() 
  {

  }

}
