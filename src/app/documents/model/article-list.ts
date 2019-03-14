import { Article } from "./article";

export class ArticleList {
  count: number;
  results: Article[];

  constructor(obj?: any) {
    this.count = obj && obj.count || 0;
    this.results = obj && obj.results.map(elem => { return new Article(elem); }) || [];
  }
}