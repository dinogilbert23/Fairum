import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonService } from '../common.service';
import { ViewportScroller } from '@angular/common';
import {forEach} from 'lodash';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-ourmission',
  templateUrl: './ourmission.component.html',
  styleUrls: ['./ourmission.component.scss']
})
export class OurmissionComponent implements OnInit {
  @ViewChild('aboutusbtn') aboutusbtn?: ElementRef;
  response: any;
  homefilter: any;
  missionfilter: any;
  missioncontent: any;
  missionHeader: any;
  constructor(private common:CommonService,private _vps: ViewportScroller,private http:HttpClient) { 
    
  }

  ngOnInit(): void { 
    this.common._aboutusid.subscribe(data=>{
      if(data == 'aboutus'){
      let inputElement: HTMLElement = this.aboutusbtn?.nativeElement as HTMLElement;
      inputElement.click();
      }
    })
   this.onLoad();
  }
  onLoad(){
    this.common.getPostValue().subscribe(response=>{
      this.response= response;
      forEach(this.response.item,(data)=>{
       this.homefilter = this.response.item.filter((item: { name: string; }) => item.name === "Home");
      });
      forEach(this.homefilter[0].item,(data)=>{
        this.missionfilter = this.homefilter[0].item.filter((item: { name: string; }) => item.name === "Mission Section");
       });
      return this.http.get(`http://${this.missionfilter[0].item[0].request.url}`).subscribe(response=>{
        this.missioncontent=response;
      })
      
          })
  }
  //function
  scrollFn(anchor:HTMLElement): void{
    anchor.scrollIntoView();
  }
  

  onClick(){
    let pos = window.pageYOffset;
    // this.viewportScroller.scrollToAnchor('myDiv');
    window.scrollTo(0, pos - 20);
  }
 
}
