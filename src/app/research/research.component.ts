import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import {forEach} from 'lodash';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.scss']
})
export class ResearchComponent implements OnInit {
  response: any;
  homefilter: any;
  researchfilter: any;
  researchcontent: any;

  constructor(private common:CommonService,private http:HttpClient) { }

  ngOnInit(): void {
    this.onLoad();
  }


  onLoad(){
    this.common.getPostValue().subscribe(response=>{
      this.response= response;
      forEach(this.response.item,(data)=>{
       this.homefilter = this.response.item.filter((item: { name: string; }) => item.name === "Home");
      });
      forEach(this.homefilter[0].item,(data)=>{
        this.researchfilter = this.homefilter[0].item.filter((item: { name: string; }) => item.name === "Mission Section");
       });
      return this.http.get(`http://${this.researchfilter[0].item[0].request.url}`).subscribe(response=>{
        this.researchcontent=response;
      })
          })
        }
}
