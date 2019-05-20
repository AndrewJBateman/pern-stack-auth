import { Component } from '@angular/core';
import { PROJECTS } from './projects';

@Component({
	selector: 'app-projects',
	templateUrl: './projects.component.html',
	styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
	projects = PROJECTS;

	constructor() { }

	openLink(uri: string) {
		if (uri != null) {
			window.open(uri, '_blank');
		}
	}
}
