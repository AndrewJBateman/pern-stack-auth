import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';

const githubUrl = 'https://api.github.com/users/andrewjbateman';

@Injectable({
	providedIn: 'root'
})
export class GithubService {


	constructor(private http: HttpClient) { }

	getUserProfile() {
		console.log(githubUrl);
		return this.http.get(githubUrl);
	}


}


