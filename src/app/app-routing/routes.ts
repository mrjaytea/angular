import { Routes } from '@angular/router';

import HomeComponent from '../home/home.component';
import AboutmeComponent from '../aboutme/aboutme.component';
import QualificationsComponent from '../qualifications/qualifications.component';
import SkillComponent from '../skill/skill.component';
import SkillsComponent from '../skills/skills.component';
import ChordfinderComponent from '../chordfinder/chordfinder.component'

export const routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'aboutme', component: AboutmeComponent},
    { path: 'qualifications', component: QualificationsComponent},
    { path: 'skills', component: SkillsComponent},
    { path: 'skills/:id', component: SkillComponent},
    { path: 'chordfinder', component: ChordfinderComponent},
    { path:'', redirectTo: '/home', pathMatch: 'full'}
]