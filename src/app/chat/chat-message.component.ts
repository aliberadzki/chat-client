/**
 * Created by aliberadzki on 30.05.17.
 */
import {Component, Input} from '@angular/core'
import {ChatMessage} from "./chat.model";

@Component({
  selector: 'chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['chat-message.component.css']
})
export class ChatMessageComponent {
  @Input() chatMsg: ChatMessage;
}
