import { Component, OnInit, Inject } from '@angular/core';
import { SkillsService } from '../service/skills.service'
import { Skills } from '../shared/skills';
import baseUrl from '../baseUrl';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  skills: Skills[];
  errmess: String;

  color: String;

  constructor(private skillsservice: SkillsService, @Inject('baseUrl') private baseUrl) { }

  ngOnInit() {
    this.skillsservice.getSkills()
      .subscribe((skills) => this.skills = skills,
      errmess=> this.errmess = <any>errmess)
  }

}

export default SkillsComponent;
