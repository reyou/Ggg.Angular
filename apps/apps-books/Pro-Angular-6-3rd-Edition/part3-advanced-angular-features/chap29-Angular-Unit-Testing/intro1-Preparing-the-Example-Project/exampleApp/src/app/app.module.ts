import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module';
import { MessageModule } from './messages/message.module';
import { AppComponent } from './app.component';
import { TermsGuard } from './terms.guard';
import { LoadGuard } from './load.guard';
import { routing } from './app.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [BrowserModule, CoreModule, MessageModule, routing, BrowserAnimationsModule],
  declarations: [AppComponent],
  providers: [TermsGuard, LoadGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
