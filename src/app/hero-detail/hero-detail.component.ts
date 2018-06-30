import { Component, OnInit, Input } from '@angular/core';
/* 添加Input符号 */
/* 导入Hero类 */
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',/* 选择器 */
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  // 带有@Input() 装饰器的 hero 属性，通过 hero 属性接收一个英雄对象
  @Input() hero: Hero;

  constructor() { }

  ngOnInit() {
  }

}
