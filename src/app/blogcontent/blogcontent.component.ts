import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blogcontent',
  templateUrl: './blogcontent.component.html',
  styleUrls: ['./blogcontent.component.scss']
})
export class BlogcontentComponent implements OnInit {
  tokenUtility: any;

  constructor() { }

  ngOnInit(): void {
    this.tokenUtility = [{
      header: 'Filium morte multavit',
      author: 'TUM DICERE',
      value: 'Et quidem faciunt, ut summo bono, dolorem ipsum, quia consequuntur magni dolores eos, qui consequutur magni dolores et quasi architecto beatae vitae sine dubio praeclara sunt, fecerint.'
    },
    {
      header: 'Filium morte multavit',
      author: 'TUM DICERE',
      value: 'Et quidem faciunt, ut summo bono, dolorem ipsum, quia consequuntur magni dolores eos, qui consequutur magni dolores et quasi architecto beatae vitae sine dubio praeclara sunt, fecerint.'
    },
    {
      header: 'Filium morte multavit',
      author: 'TUM DICERE',
      value: 'Et quidem faciunt, ut summo bono, dolorem ipsum, quia consequuntur magni dolores eos, qui consequutur magni dolores et quasi architecto beatae vitae sine dubio praeclara sunt, fecerint.'
    },
    {
      header: 'Filium morte multavit',
      author: 'TUM DICERE',
      value: 'Et quidem faciunt, ut summo bono, dolorem ipsum, quia consequuntur magni dolores eos, qui consequutur magni dolores et quasi architecto beatae vitae sine dubio praeclara sunt, fecerint.'
    }]
  }

}
