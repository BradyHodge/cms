import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Message } from '../message.model';
import { MessageItem } from '../message-item/message-item';
import { MessageEdit } from '../message-edit/message-edit';

@Component({
  selector: 'cms-message-list',
  imports: [CommonModule, MessageItem, MessageEdit],
  templateUrl: './message-list.html',
  styleUrl: './message-list.css'
})
export class MessageList {
  messages: Message[] = [
    new Message('1', 'Welcome', 'Welcome to the CMS!', 'System'),
    new Message('2', 'Meeting', 'Team meeting at 3pm', 'John Doe'),
    new Message('3', 'Update', 'New features available', 'Admin')
  ];

  onAddMessage(message: Message) {
    this.messages.push(message);
  }
}