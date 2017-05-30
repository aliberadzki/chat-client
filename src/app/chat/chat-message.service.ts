/**
 * Created by aliberadzki on 30.05.17.
 */
import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable, Subject} from "rxjs";
import {ChatMessage} from "./chat.model";

@Injectable()
export class ChatMessageService {
  constructor(private http:Http) {}
  public getMessages() : Observable<ChatMessage[]>{

    return this.http
      .get('http://localhost:8080/chat')
      .map((response: Response) =>{
        return response.json();
      })
      .catch(this.handleError);
  }

  private handleError(error : Response) {
    return Observable.throw(error.statusText);
  };
}
