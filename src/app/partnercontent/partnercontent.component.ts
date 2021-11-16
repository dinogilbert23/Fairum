import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import {forEach} from 'lodash'
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-partnercontent',
  templateUrl: './partnercontent.component.html',
  styleUrls: ['./partnercontent.component.scss'],
  host: {
    '(window:resize)': 'onResize($event)'
  }
})
export class PartnercontentComponent implements OnInit {
  response: any;
  homefilter: any;
  portfoliofilter: any;
  portfoliocontent: any;
  onResize(event: any) {
    this.screenWidth=event.target.innerWidth < 658 ? 'col-sm-12' : 'col';
  }
  portfolio: any;
  public screenWidth!: string;

  constructor(private common:CommonService,private http:HttpClient) { }

  ngOnInit(): void {
    if (window.innerWidth < 658) {
      this.screenWidth = 'col-sm-12';
    } else {
      this.screenWidth = 'col';
    }
    this.portfolio = [{
      vabble: '../../assets/images/vabble.png',
      eight: '../../assets/images/eight.png',
      defi: '../../assets/images/opendefi.png',
      centaur: '../../assets/images/centaur.png',
      daofi: '../../assets/images/daofi.jfif'
    },]
    // this.onLoad();
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
