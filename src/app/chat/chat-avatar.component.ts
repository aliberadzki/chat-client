/**
 * Created by aliberadzki on 30.05.17.
 */
import {Component, Input, OnInit} from '@angular/core'

@Component({
  selector: 'chat-avatar',
  templateUrl: './chat-avatar.component.html',
  styleUrls: ['./chat-avatar.component.css']
})
export class ChatAvatarComponent implements OnInit {
  @Input() author: String;
  letter: String = '?';

  ngOnInit(): void {
    this.letter = this.author.charAt(0).toUpperCase();
  }

}
