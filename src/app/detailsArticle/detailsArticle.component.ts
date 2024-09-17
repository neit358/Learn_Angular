import { Component, OnInit } from '@angular/core';
import { I_Article } from '../models/article.model';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../service/article.service';
import { Observable } from 'rxjs';
import { TabsContentDirective } from '../tabs/tabs_content.directive';
import { CommonModule } from '@angular/common';
import { subscribe } from 'diagnostics_channel';

@Component({
  selector: 'detailsArticle',
  standalone: true,
  template: `
    <div *ngIf="article$ | async as article; else NoData">
      <p>{{ article.title }}</p>
      <br />
      <p>{{ article.body }}</p>
    </div>
    <ng-template #NoData> 
        No data
    </ng-template>
  `,
  imports: [TabsContentDirective, CommonModule],
})
export class DetailsArticleComponent implements OnInit {
  article$: Observable<I_Article | undefined> | undefined;
  //article: I_Article | undefined;
  id: string | undefined;

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('slug')!;

    this.article$ = this.articleService.getArticle(this.id);

    //this.article$.subscribe(console.log);
   
    // this.article$.subscribe((value: I_Article | undefined) => {
    //   this.article = value;
    // });
  }
}
