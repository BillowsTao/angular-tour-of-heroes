import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

/* 修饰器，用于指定该组件的元数据 */
@Component({
  selector: 'app-heroes', /* 组件的选择器(CSS元素选择器) */
  templateUrl: './heroes.component.html', /* 组件模板文件的选择器 */
  styleUrls: ['./heroes.component.css'] /* 私有组件的CSS样式表文件的位置 */
})
export class HeroesComponent implements OnInit {
  //将heroes属性设置为heros,暴露数据,以供绑定
  heroes = HEROES;
  selectedHero: Hero;

  // 点击事件函数
  onSelect(hero: Hero): void{
    this.selectedHero = hero;
  }

  constructor() {
    /* 构造函数 */
   }

  ngOnInit() {
    /* 生命周期钩子
    * 作用：
    * 1.在构造函数之后马上执行复杂的初始化逻辑
    * 2.在 Angular 设置完输入属性之后，对该组件进行准备。*/
  }

}
