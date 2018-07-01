import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: string[] = [];

  //添加消息信息
  add(message: string){
    this.messages.push(message);
  }

  //清除消息信息
  clear(){
    this.messages = [];
  }
}
