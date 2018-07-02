import { Component, OnInit, Input } from '@angular/core';
/* 添加Input符号 */

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
/* 导入Hero类 */
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',/* 选择器 */
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  // 带有@Input() 装饰器的 hero 属性，通过 hero 属性接收一个英雄对象
  @Input() hero: Hero;

  constructor(//将AcitvetedRoute、HeroService和Location服务注入到构造器函数中
    private route: ActivatedRoute,
    private heroService: HeroService, //从远端服务器获取英雄数据
    private location: Location  //与浏览器打交道
  ) { }

  ngOnInit() {
    this.getHero();
  }

  //获取英雄
  getHero(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  //控制浏览器的历史栈后退一步
  goBack(): void {
    this.location.back();
  }

  //保存英雄数据
  save(): void {
    this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack());
  }
  
}
