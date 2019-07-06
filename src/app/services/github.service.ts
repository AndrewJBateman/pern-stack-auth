import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable({
	providedIn: 'root'
})
export class GithubService {
	entries: Array<any>;


	constructor(private http: HttpClient) { }

	getUserProfile() {
	return this.http.get('https://api.github.com/users/andrewjbateman/repos');
	}


}


