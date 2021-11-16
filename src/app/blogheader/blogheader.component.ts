import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonService } from '../common.service';
import {forEach} from 'lodash';
@Component({
  selector: 'app-blogheader',
  templateUrl: './blogheader.component.html',
  styleUrls: ['./blogheader.component.scss']
})
export class BlogheaderComponent implements OnInit {
  @ViewChild('blogbtn') blogbtn?: ElementRef;
  constructor(private common:CommonService,private http:HttpClient) { }
  response: any;
  homefilter: any;
  portfoliofilter: any;
  portfoliocontent: any;

  ngOnInit(): void { 
    this.common._blogid.subscribe(data=>{
      if(data == 'blog'){
      let inputElement: HTMLElement = this.blogbtn?.nativeElement as HTMLElement;
      inputElement.click();
      }
    })
    this.onLoad();
  }
  //function
  scrollFn(anchor:HTMLElement): void{
    anchor.scrollIntoView();
  }

  onLoad(){
    this.common.getPostValue().subscribe(response=>{
      this.response= response;
      forEach(this.response.item,(data)=>{
       this.homefilter = this.response.item.filter((item: { name: string; }) => item.name === "About us");
      });
      forEach(this.homefilter[0].item,(data)=>{
        this.portfoliofilter = this.homefilter[0].item.filter((item: { name: string; }) => item.name === "get about us detail");
       });
      return this.http.get(`http://${this.portfoliofilter[0].request.url}`).subscribe(response=>{
        this.portfoliocontent=response;         
      })
          })
        }
}
