import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VaultComponent } from './components/vault/vault.component';
import { LairComponent } from './components/lair/lair.component';
import { AbyssComponent } from './components/abyss/abyss.component';

@NgModule({
  declarations: [
    AppComponent,
    VaultComponent,
    LairComponent,
    AbyssComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
