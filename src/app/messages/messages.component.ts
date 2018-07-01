import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  //添加 public 的 messageService 属性
  //Angular只会绑定到组件的公共属性
  constructor(public messageService: MessageService) { }

  ngOnInit() {
  }

}
