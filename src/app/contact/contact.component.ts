import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  lineHover = {
    onEmail: false,
    onGithub : false,
    onLinkedIn : false
  };

  constructor() { }

  ngOnInit() {
  }

}
