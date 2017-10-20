import { Component, OnInit } from '@angular/core';

//import {Person} from '../person';
import { News } from '../Models/NewsModel';
import { NewsService } from '../Services/news.service';


@Component({
  selector: 'app-tech-news-content',
  templateUrl: './tech-news-content.component.html',
  styleUrls: ['./tech-news-content.component.scss'],
  providers: [NewsService]
})
export class TechNewsContentComponent implements OnInit {
 errorMessage: string;
    articles: News[];
 
    // We don't call the get method in the constructor
    constructor(private newsService: NewsService) {}
 
    // Fetching the records in the onInit lifecycle method makes the application easier to debug
    ngOnInit() { this.getArticles(); }
 
    // The subscribes to the getPosts stream from the PostService
    getArticles() {
        this.newsService.getArticles()
            .subscribe(
                articles => this.articles = articles,
                error => this.errorMessage = error
            )

    }

}
