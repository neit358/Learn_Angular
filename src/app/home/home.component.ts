import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { I_Article } from '../models/article.model';
import { CommonModule } from '@angular/common';
import { ArticleService } from '../service/article.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <p>Home works</p>
    <ul style="list-style-type: none;">
        <li *ngFor="let article of articles | async" style="border: 1px solid #000; padding: 20px; margin-bottom: 10px;" >
            {{article.title}}
            <br/>
            <a [routerLink]="['/detail', article.slug]" routerLinkActive="router-link-active" >Read more</a>
        </li>
    </ul>
  `,
})
export class HomeComponent implements OnInit {
  articles: Observable<I_Article[]> | undefined;

  constructor(private articleService: ArticleService){}

  ngOnInit(): void {
    this.articles = this.articleService.getArticles$();
  }


}
