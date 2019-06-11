import { Component, OnInit } from '@angular/core';
import { EDUCATION } from './education';

@Component({
	selector: 'app-education',
	templateUrl: './education.component.html',
	styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
	education = EDUCATION;

	constructor() { }

	ngOnInit() {
	}

}
