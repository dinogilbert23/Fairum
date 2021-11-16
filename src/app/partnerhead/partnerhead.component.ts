import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import {forEach} from 'lodash'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-partnerhead',
  templateUrl: './partnerhead.component.html',
  styleUrls: ['./partnerhead.component.scss']
})
export class PartnerheadComponent implements OnInit {
  response: any;
  homefilter: any;
  portfoliofilter: any;
  portfoliocontent: any;
  constructor(private common:CommonService,private http:HttpClient) { }

  ngOnInit(): void {
    // this.onLoad()
  }
  onLoad(){
    this.common.getPostValue().subscribe(response=>{
      this.response= response;
      forEach(this.response.item,(data)=>{
       this.homefilter = this.response.item.filter((item: { name: string; }) => item.name === "Home");
      });
      forEach(this.homefilter[0].item,(data)=>{
        this.portfoliofilter = this.homefilter[0].item.filter((item: { name: string; }) => item.name === "partnership");
       });
      return this.http.get(`http://${this.portfoliofilter[0].item[0].request.url}`).subscribe(response=>{
        this.portfoliocontent=response;  
         
      })
          })
        }
}
