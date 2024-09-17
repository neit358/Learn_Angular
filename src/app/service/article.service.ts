import { Injectable } from '@angular/core';
import { I_Article } from '../models/article.model';
import { map, Observable, of, pipe, share, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  article1: I_Article = {
    title: 'The Future of Technology',
    body: 'Technology is evolving rapidly and shaping the future in unprecedented ways. Innovations such as AI, blockchain, and quantum computing are set to transform industries and redefine the way we live and work.',
    slug: 'the-future-of-technology',
  };

  article2: I_Article = {
    title: 'Sustainable Living: A Guide',
    body: 'Sustainable living is becoming increasingly important as we face environmental challenges. This article offers practical tips on reducing waste, conserving energy, and making eco-friendly choices for a greener future.',
    slug: 'sustainable-living-guide',
  };

  getArticles$() {
    return of<I_Article[]>([this.article1, this.article2]).pipe(shareReplay(1));
  }

  getArticle (slug: string): Observable<I_Article | undefined> {
    return this.getArticles$().pipe(map((article: I_Article[]) => article.find(x => x.slug === slug)));
  }
}
