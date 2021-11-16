import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isShown: boolean = false;
  imagrurl: string = '../../assets/images/network.jpg';
  response:any;
  sliderfilter!:string;
  slidercontent:any;
  constructor(private common: CommonService, private http:HttpClient) { }

  ngOnInit(): void {
    
  }
  Toggle(menuname: string): void {
    if (menuname == 'home') {
      this.common._homeid.next(menuname);
    }else if(menuname == 'aboutus'){
      this.common._aboutusid.next(menuname);
    }else if(menuname == 'blog'){
      this.common._blogid.next(menuname);
    }else if(menuname == 'portfolio'){
      this.common._portfolioid.next(menuname);
    }
  }

}
