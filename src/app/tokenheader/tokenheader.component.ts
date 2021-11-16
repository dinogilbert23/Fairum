import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { forEach } from 'lodash';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-tokenheader',
  templateUrl: './tokenheader.component.html',
  styleUrls: ['./tokenheader.component.scss']
})
export class TokenheaderComponent implements OnInit {
  response: any;
  homefilter: any;
  tokenfilter: any;
  tokencontent: any;

  constructor(private common: CommonService, private http: HttpClient) { }

  ngOnInit(): void {
    this.onLoad();
  }

  onLoad() {
    this.common.getPostValue().subscribe(response => {
      this.response = response;
      forEach(this.response.item, (data) => {
        this.homefilter = this.response.item.filter((item: { name: string; }) => item.name === "Home");
      });
      forEach(this.homefilter[0].item, (data) => {
        this.tokenfilter = this.homefilter[0].item.filter((item: { name: string; }) => item.name === "Tokens Utility");
      });
      return this.http.get(`http://${this.tokenfilter[0].item[0].request.url}`).subscribe(response => {
        this.tokencontent = response;

      })
    })
  }
}
