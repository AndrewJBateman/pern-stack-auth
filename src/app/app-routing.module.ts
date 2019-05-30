import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { ContactComponent } from './contact/contact.component';
import { ResumeComponent } from './resume/resume.component';
import { OtherComponent } from './other/other.component';

const routes: Routes = [
{
path: '',
redirectTo: '/home',
pathMatch: 'full'
},
{
path:  'home',
component:  HomeComponent
},
{
path:  'about',
component:  AboutComponent
},
{
path:  'projects',
component:  ProjectsComponent
},
{
path:  'skills',
component:  SkillsComponent
},
{
path:  'experience',
component:  ExperienceComponent
},
{
path:  'education',
component:  EducationComponent
},
{
path:  'other',
component:  OtherComponent
},
{
path:  'contact',
component:  ContactComponent
},
{
path:  'resume',
component:  ResumeComponent
}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
