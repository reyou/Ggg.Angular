import { ErrorHandler, Injectable, NgZone } from '@angular/core';
import { MessageService } from './message.service';
import { Message } from './message.model';
@Injectable()
export class MessageErrorHandler implements ErrorHandler {
  constructor(private messageService: MessageService, private ngZone: NgZone) {}
  handleError(error) {
    let msg = error instanceof Error ? error.message : error.toString();
    this.ngZone.run(() => this.messageService.reportMessage(new Message(msg, true)), 0);
  }
}
/* ErrorHandler: Provides a hook for centralized exception handling.
The default implementation of ErrorHandler prints error messages to the console. 
To intercept error handling, write a custom exception handler that replaces this default as appropriate for your app. */
/* An injectable service for executing work inside or outside of the Angular zone.
The most common use of this service is to optimize performance when starting a work consisting 
of one or more asynchronous tasks that don't require UI updates or error handling to be handled by Angular. 
Such tasks can be kicked off via {@link #runOutsideAngular} and if needed, 
these tasks can reenter the Angular zone via {@link #run}. */
