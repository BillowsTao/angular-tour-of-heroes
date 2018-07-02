import { Injectable } from '@angular/core';
//导入RxJS库Observable
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
/* 依赖注入系统的参与者 */
@Injectable({
  providedIn: 'root'
})
// 将当前的服务注入到根注入器上
export class HeroService {

  constructor(private messageService: MessageService) { }

  //获取英雄列表的数据
  getHeroes(): Observable<Hero[]> {
    //通过of函数模拟服务器获取数据
    //获取到英雄信息时发送一条消息
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

  //通过id获取英雄
  getHero(id: number): Observable<Hero> {
    // TODO: send the message _after_ getching the hero
    // 通过``提供模板字符串环境
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }

}