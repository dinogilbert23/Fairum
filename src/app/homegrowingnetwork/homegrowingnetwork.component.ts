import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import {forEach} from 'lodash';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-homegrowingnetwork',
  templateUrl: './homegrowingnetwork.component.html',
  styleUrls: ['./homegrowingnetwork.component.scss']
})
export class HomegrowingnetworkComponent implements OnInit {
  response: any;
  homefilter: any;
  globalfilter: any;
  globalcontent: any;
  missionHeader: any;

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
        this.globalfilter = this.homefilter[0].item.filter((item: { name: string; }) => item.name === "Mission Section");
       });
      return this.http.get(`http://${this.globalfilter[0].item[0].request.url}`).subscribe(response=>{
        this.globalcontent=response;        
      })
      
          })
  }
}
