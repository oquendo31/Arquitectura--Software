import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './components/material-module/material-module';
import { FlexsLayoutModule } from './components/flex-layout/flex-layout-module';



@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FlexsLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
