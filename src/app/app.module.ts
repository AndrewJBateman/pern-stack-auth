import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialImports} from './material-imports';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';
import { ResumeComponent } from './resume/resume.component';
import { HeaderComponent } from './header/header.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { OtherComponent } from './other/other.component';
import { ArticlesComponent } from './articles/articles.component';
import { GithubService } from './services/github.service';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		AboutComponent,
		ProjectsComponent,
		SkillsComponent,
		ContactComponent,
		ResumeComponent,
		HeaderComponent,
		ExperienceComponent,
		EducationComponent,
		OtherComponent,
		ArticlesComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MaterialImports,
		MDBBootstrapModule.forRoot(),
		HttpClientModule
	],
	providers: [GithubService],
	bootstrap: [AppComponent]
})
export class AppModule { }
