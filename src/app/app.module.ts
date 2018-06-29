import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//导入FormsModule
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.compon;
import { HeroDetailComponent } from './hero-detail/hero-detail.component'ent';

@NgModule({
  declarations: [
    AppComponent,
    HeroesCompo,
    HeroDetailComponentnent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
