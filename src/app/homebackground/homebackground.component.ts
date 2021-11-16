import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-homebackground',
  templateUrl: './homebackground.component.html',
  styleUrls: ['./homebackground.component.scss']
})
export class HomebackgroundComponent implements OnInit {

  constructor(private common:CommonService ) { }

  ngOnInit(): void {
    this.common.getPostValue().subscribe(data=>{
      
    })
  }

}
