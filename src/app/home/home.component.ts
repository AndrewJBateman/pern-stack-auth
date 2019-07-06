import { Component, OnInit } from '@angular/core';
import { GithubService } from './../services/github.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	data: any;

	constructor(private githubService: GithubService) { }

	ngOnInit() {
		this.githubService.getUserProfile().subscribe(
			data => {
				console.log(data);
				this.data = data;
			}
		);
	}

}
