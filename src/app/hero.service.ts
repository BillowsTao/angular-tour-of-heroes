import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//导入RxJS库Observable
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

/* 定义http请求中httpOptions常量 */
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

/* 依赖注入系统的参与者 */
@Injectable({
  providedIn: 'root'
})
/* 将当前的服务注入到根注入器上 */
export class HeroService {
  private heroesUrl = 'api/heroes';
  constructor(
    private http: HttpClient, //将 HttpClient 注入到名叫http的私有属性中
    private messageService: MessageService) { }

  /* 日志函数 */
  private log(message: string) {
    this.messageService.add('HeroService: ' + message);
  }

  /* 获取英雄列表的数据 */
  getHeroes(): Observable<Hero[]> {
    /* 调用HttpClient的方法获取数据 */
    return this.http.get<Hero[]>(this.heroesUrl)
      .pipe(
        tap(heroes => this.log(`fetched heroes`)),
        catchError(this.handleError('getHeroes', []))
      );
  }

  /* 异常处理函数 */
  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  //通过id获取英雄
  getHero(id: number): Observable<Hero> {
    // 通过``提供模板字符串环境
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    );
  }

  /* 更新英雄信息 */
  updateHero(hero: Hero): Observable<any> {
    return this.http.put(this.heroesUrl, hero, httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${hero.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }

  /* 添加英雄 */
  addHero (hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl, hero, httpOptions).pipe(
      tap((hero: Hero) => this.log(`added hero w/ id=${hero.id}`)),
      catchError(this.handleError<Hero>('addHero'))
    );
  }

  /* 删除英雄函数 */
  deleteHero(hero: Hero | number): Observable<Hero> {
    const id = typeof hero === 'number' ? hero : hero.id;
    const url = `${this.heroesUrl}/${id}`;

    return this.http.delete<Hero>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted hero id=${id}`)),
      catchError(this.handleError<Hero>('deleteHero'))
    );
  }

  /* 查找英雄函数 */
  searchHeroes(term: string): Observable<Hero[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Hero[]>(`api/heroes/?name=${term}`).pipe(
      tap(_ => this.log(`found heroes matching "${term}"`)),
      catchError(this.handleError<Hero[]>('searchHeroes', []))
    );
  }
}