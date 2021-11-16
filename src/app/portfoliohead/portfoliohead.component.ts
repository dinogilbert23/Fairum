import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonService } from '../common.service';
import {forEach} from 'lodash';

@Component({
  selector: 'app-portfoliohead',
  templateUrl: './portfoliohead.component.html',
  styleUrls: ['./portfoliohead.component.scss']
})
export class PortfolioheadComponent implements OnInit {
  @ViewChild('portfoliobtn') portfoliobtn?: ElementRef;
  constructor(private common:CommonService,private http:HttpClient) { }
  response: any;
  homefilter: any;
  portfoliofilter: any;
  portfoliocontent: any;
  ngOnInit(): void { 
    this.common._portfolioid.subscribe(data=>{
      if(data == 'portfolio'){
      let inputElement: HTMLElement = this.portfoliobtn?.nativeElement as HTMLElement;
      inputElement.click();
      }
     
    })
    this.onLoad()
  }
  //function
  scrollFn(anchor:HTMLElement): void{
    anchor.scrollIntoView();
  }
  onLoad(){
    this.common.getPostValue().subscribe(response=>{
      this.response= response;
      forEach(this.response.item,(data)=>{
       this.homefilter = this.response.item.filter((item: { name: string; }) => item.name === "Home");
      });
      forEach(this.homefilter[0].item,(data)=>{
        this.portfoliofilter = this.homefilter[0].item.filter((item: { name: string; }) => item.name === "Portfolios");
       });
      return this.http.get(`http://${this.portfoliofilter[0].item[0].request.url}`).subscribe(response=>{
        this.portfoliocontent=response;   
      })
          })
        }
  }