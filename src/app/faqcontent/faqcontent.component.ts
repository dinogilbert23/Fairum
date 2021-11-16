import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import {forEach} from 'lodash';
@Component({
  selector: 'app-faqcontent',
  templateUrl: './faqcontent.component.html',
  styleUrls: ['./faqcontent.component.scss']
})
export class FaqcontentComponent implements OnInit {
  faqcontent: any;
  response: any;
  homefilter: any;
  tiersfilter: any;
  tierscontent: any;
  // isToggle: boolean = false;
  constructor(private common:CommonService,private http:HttpClient) { }

  ngOnInit(): void {
    this.faqcontent = [{
      heading: 'How to join FAIRUM Ventures?',
      content: 'To join FAIRUM Ventures,simply click on "Join FAIRUM Ventures" button, where you will be redirected to our FAIRUM Ventures - Lobby    Telegram channel. Read and follow the pinned message inside the group for further instructions. Its that simple!'
    },
    {
      heading: 'What is the purpose of NEBO community token?',
      content: 'To join FAIRUM Ventures,simply click on "Join FAIRUM Ventures" button, where you will be redirected to our FAIRUM Ventures - Lobby    Telegram channel. Read and follow the pinned message inside the group for further instructions. Its that simple!'
    },
    {
      heading: 'Where can I buy NEBO token?',
      content: 'To join FAIRUM Ventures,simply click on "Join FAIRUM Ventures" button, where you will be redirected to our FAIRUM Ventures - Lobby    Telegram channel. Read and follow the pinned message inside the group for further instructions. Its that simple!'
    },
    {
      heading: 'How do I get access to token?',
      content: 'To join FAIRUM Ventures,simply click on "Join FAIRUM Ventures" button, where you will be redirected to our FAIRUM Ventures - Lobby    Telegram channel. Read and follow the pinned message inside the group for further instructions. Its that simple!'
    }, {
      heading: 'How do I get access to deals?',
      content: 'To join FAIRUM Ventures,simply click on "Join FAIRUM Ventures" button, where you will be redirected to our FAIRUM Ventures - Lobby    Telegram channel. Read and follow the pinned message inside the group for further instructions. Its that simple!'
    },
    {
      heading: 'I purchased NEBO tokens, whats Next?',
      content: 'To join FAIRUM Ventures,simply click on "Join FAIRUM Ventures" button, where you will be redirected to our FAIRUM Ventures - Lobby    Telegram channel. Read and follow the pinned message inside the group for further instructions. Its that simple!'
    }]
    this.onLoad();
  }
  Toggle(i: any) {
    this.faqcontent[i].isToggle = !this.faqcontent[i].isToggle;
    
  }

  onLoad(){
    this.common.getPostValue().subscribe(response=>{
      this.response= response;
      forEach(this.response.item,(data)=>{
       this.homefilter = this.response.item.filter((item: { name: string; }) => item.name === "Home");
      });
      forEach(this.homefilter[0].item,(data)=>{
        this.tiersfilter = this.homefilter[0].item.filter((item: { name: string; }) => item.name === "faqs");
       });
      return this.http.get(`http://${this.tiersfilter[0].item[0].request.url}`).subscribe(response=>{
        this.tierscontent=response;
         
      })
          })
        }
}
