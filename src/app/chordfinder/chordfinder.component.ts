import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import baseUrl from '../baseUrl';

@Component({
  selector: 'app-chordfinder',
  templateUrl: './chordfinder.component.html',
  styleUrls: ['./chordfinder.component.scss']
})
export class ChordfinderComponent implements OnInit {
  feedbackForm: FormGroup;
  chordnames :String[] = ['C', 'Csharp Dflat', 'D', 'Dsharp Eflat','E','F','Fsharp Gflat','G','Gsharp Aflat','A','AsharpBflat','B','Cm', 'CsharpmDflatm', 'Dm', 'Dsharpm Eflatm','Em','Fm','Fsharpm Gflatm','Gm','Gsharpm Aflatm','Am','AsharpmBflatm','Bm']

  constructor(private fb: FormBuilder, @Inject('baseUrl') private baseUrl) {
    this.createForm();
   }

   createForm(){
     this.feedbackForm = this.fb.group({
       chordname: ['']
     })
   }

  ngOnInit( ) {
  }

}

export default ChordfinderComponent;
