/**
 * Created by aliberadzki on 30.05.17.
 */
import { Component } from '@angular/core'
import { StompService } from 'ng2-stomp-service'
import {ChatMessageService} from "./chat-message.service";
import {ChatMessage} from "./chat.model";

@Component({
  selector: 'chat',
  templateUrl: './chat.component.html'
})
export class ChatComponent {
  title = 'Type in your nickname';
  isLogged : boolean = false;
  nick: String;
  private subscription : any;
  public msg : String;
  public messages : Array<ChatMessage> = [];

  constructor(private stomp: StompService, private msgService: ChatMessageService) {
  }

  ngOnInit() {
    //configuration
    this.stomp.configure({
      host:'http://localhost:8080/gs-guide-websocket',
      debug:true,
      queue:{'init':false, 'greetings':false}
    });
  }

  //response
  public response = (data) => {
    this.messages.push({"content": data.content, author: data.author, "timestamp" : data.timestamp});
  };

  public login() : void {
    //start connection
    this.stomp.startConnect().then(() => {
      this.stomp.done('init');
      console.log('connected');
      this.isLogged = true;
      this.title = "Type in your message";
      this.msgService.getMessages().subscribe(msgs => this.messages = msgs);

      //subscribe
      this.subscription = this.stomp.subscribe('/topic/greetings', this.response);
    });
  }

  public logout() : void {
    //unsubscribe
    this.subscription.unsubscribe();

    //disconnect
    this.stomp.disconnect().then(() => {
      console.log( 'Connection closed' )
    })
  }

  public sendMessage(msg: String) : void {
    let chatMsg: ChatMessage = {
      content: msg,
      author: this.nick,
      timestamp: "now"
    };
    this.stomp.send('/app/hello',chatMsg);
    // this.messages.push(chatMsg);
    this.msg = "";
  }
}

