import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  lineHover = {
    onEmail: false,
    onGithub : false,
    onLinkedIn : false
  };

  constructor() { }

  ngOnInit() {
  }

}
