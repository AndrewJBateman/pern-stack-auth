import { Component, OnInit } from '@angular/core';
import { EXPERIENCES } from './experiences';

@Component({
	selector: 'app-vitae',
	templateUrl: './vitae.component.html',
	styleUrls: ['./vitae.component.scss']
})
export class VitaeComponent implements OnInit {
	experiences = EXPERIENCES;

	constructor() { }

	ngOnInit() {
	}

}
