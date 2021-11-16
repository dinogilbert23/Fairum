import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonService } from '../common.service';
import {forEach} from 'lodash';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-homeslider',
  templateUrl: './homeslider.component.html',
  styleUrls: ['./homeslider.component.scss']
})
export class HomesliderComponent implements OnInit {
  @ViewChild('homebtn') home?: ElementRef;
  response: any;
  sliderfilter: any={};
  homefilter:any;
  slidercontent:any;
  splitedHeader:any;
  constructor(private common:CommonService,private http:HttpClient) { }

  ngOnInit(): void { 
    this.common._homeid.subscribe(data=>{
      if(data == 'home'){
      let inputElement: HTMLElement = this.home?.nativeElement as HTMLElement;
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
        this.sliderfilter = this.homefilter[0].item.filter((item: { name: string; }) => item.name === "Sliders");
       });
      return this.http.get(`http://${this.sliderfilter[0].item[0].request.url}`).subscribe(response=>{
        this.slidercontent=response;
        this.splitedHeader = this.slidercontent.data[0].title.split("\\n");
      })
      
          })
  }

  //function
  scrollFn(anchor:HTMLElement): void{
    anchor.scrollIntoView();

}
}