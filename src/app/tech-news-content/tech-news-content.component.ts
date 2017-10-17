import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-tech-news-content',
  templateUrl: './tech-news-content.component.html',
  styleUrls: ['./tech-news-content.component.scss']
})
export class TechNewsContentComponent implements OnInit {
  constructor( private http :Http) {}

  ngOnInit() :void {
  	this.http.get('https://api.github.com/users/peswaran').subscribe(
      (data) => {
     const showme = data.json()
      console.log(showme.login);
     
    })

  }

}

