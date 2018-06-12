import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes = HEROES;

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
