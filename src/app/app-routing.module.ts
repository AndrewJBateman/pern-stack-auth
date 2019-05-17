import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { VitaeComponent } from './vitae/vitae.component';
import { ContactComponent } from './contact/contact.component';
import { ResumeComponent } from './resume/resume.component';

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
path:  'vitae',
component:  VitaeComponent
},
{
path:  'contact',
component:  ContactComponent
}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
