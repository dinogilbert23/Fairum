import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  response: any;

  constructor(private http: HttpClient) { }
  public _homeid = new BehaviorSubject<string>('');
  public _aboutusid = new BehaviorSubject<string>('');
  public _blogid = new BehaviorSubject<string>('');
  public _portfolioid = new BehaviorSubject<string>('');
  public _response = new BehaviorSubject<object>([]);

  getPostValue(){
    return this.http.get('https://www.postman.com/collections/8ed61d1af7d38357a926');

  }
  onLoad(){
    this.getPostValue().subscribe(response=>{
      this._response.next(response);
    });
  }
}
