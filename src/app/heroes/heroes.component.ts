import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

/* 修饰器，用于指定该组件的元数据 */
@Component({
  selector: 'app-heroes', /* 组件的选择器(CSS元素选择器) */
  templateUrl: './heroes.component.html', /* 组件模板文件的选择器 */
  styleUrls: ['./heroes.component.css'] /* 私有组件的CSS样式表文件的位置 */
})
export class HeroesComponent implements OnInit {
  //将heroes属性设置为heros,暴露数据,以供绑定
  heroes: Hero[];   //声明英雄对象数组
  selectedHero: Hero;

  // 点击事件函数
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  //1.添加私有heroService属性，类型为HeroService
  //2.标记为HeroService的注入点
  constructor(private heroService: HeroService) {
    /* 构造函数 */
  }

  ngOnInit() {
    /* 生命周期钩子
    * 作用：
    * 1.在构造函数之后马上执行复杂的初始化逻辑
    * 2.在 Angular 设置完输入属性之后，对该组件进行准备。*/
    this.getHeroes(); //调用getHeroes()方法获取英雄
  }

  getHeroes(): void {
    //异步请求
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

}
