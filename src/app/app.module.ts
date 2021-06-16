import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';

import { ErrorComponent } from './error/error.component';

@NgModule({
    declarations: [
        AppComponent,
        ErrorComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SharedModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
