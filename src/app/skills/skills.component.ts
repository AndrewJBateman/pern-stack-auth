import { Component } from '@angular/core';
import { SKILLS } from './skills';

@Component({
selector: 'app-skills',
templateUrl: './skills.component.html',
styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
	skills = SKILLS;

	Constructor() { }

}
