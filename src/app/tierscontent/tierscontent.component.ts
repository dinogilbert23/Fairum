import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import {forEach} from 'lodash';
@Component({
  selector: 'app-tierscontent',
  templateUrl: './tierscontent.component.html',
  styleUrls: ['./tierscontent.component.scss']
})
export class TierscontentComponent implements OnInit {
 tierscontent:any;
  response: any;
  homefilter: any;
  tiersfilter: any;
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
        this.tiersfilter = this.homefilter[0].item.filter((item: { name: string; }) => item.name === "Tier Utility");
       });
      return this.http.get(`http://${this.tiersfilter[0].item[0].request.url}`).subscribe(response=>{
        this.tierscontent=response; 
      })
          })
        }

}
