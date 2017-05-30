import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StompService } from 'ng2-stomp-service';

import { AppComponent } from './app.component';
import {ChatComponent} from "./chat/chat.component";
import {ChatMessageComponent} from "./chat/chat-message.component";
import {ChatMessageService} from "./chat/chat-message.service";
import {ChatAvatarComponent} from "./chat/chat-avatar.component";

@NgModule({
  declarations: [
    AppComponent, ChatComponent, ChatMessageComponent, ChatAvatarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [StompService, ChatMessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
