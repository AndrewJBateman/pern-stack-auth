import { Component, OnInit } from '@angular/core';
import { ARTICLES } from './articles';

@Component({
	selector: 'app-articles',
	templateUrl: './articles.component.html',
	styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent {
	articles = ARTICLES;

	constructor() { }

	openLink(uri: string) {
		if (uri != null) {
			window.open(uri, '_blank');
		}
	}

}
