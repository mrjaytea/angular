import { Component, OnInit, Inject } from '@angular/core';
import { Skills } from '../shared/skills';
import { SkillsService } from '../service/skills.service'
import { Params, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import baseUrl from '../baseUrl';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {
  skill: Skills;
  errMess: string;

  constructor(private route: ActivatedRoute, private skillsService: SkillsService, @Inject("baseUrl") private baseUrl) { }

  ngOnInit() {
    this.route.params.pipe(switchMap((params: Params) => {return this.skillsService.getSkill(params['id']);}))
        // Update the prev and next id everytime the dish get updated
        // We set the visibility to shown. Then the state: hidden => shown, the animation will be presented accordingly
        .subscribe(skill => { this.skill = skill}, errmess => this.errMess = <any>errmess)
        console.log(this.skill);
  }
}

export default SkillComponent;
