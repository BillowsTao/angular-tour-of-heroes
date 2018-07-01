import { Injectable } from '@angular/core';
//导入RxJS库Observable
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
/* 依赖注入系统的参与者 */
@Injectable({
  providedIn: 'root'
})
// 将当前的服务注入到根注入器上
export class HeroService {

  constructor() { }

  //获取英雄列表的数据
  getHeroes(): Observable<Hero[]> {
    //通过of函数模拟服务器获取数据
    return of(HEROES);
  }

}