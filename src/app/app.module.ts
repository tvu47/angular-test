import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BoxComponent } from './components/box/box.component';
import { Stuff1Component } from './components/stuff1/stuff1.component';
import { Stuff2Component } from './components/stuff2/stuff2.component';
import { Stuff3Component } from './components/stuff3/stuff3.component';
import { AdDirective } from './components/ad.directive';
import { AdService } from './components/ad.service';
import { TestsComponent } from './components/tests/tests.component';
import { NavComponent } from './components/tests/nav/nav.component';
import { Content1Component } from './components/tests/content1/content1.component';
import { Content2Component } from './components/tests/content2/content2.component';
import { Content3Component } from './components/tests/content3/content3.component';
import { TestDirective } from './components/tests/test.directive';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BoxComponent,
    Stuff1Component,
    Stuff2Component,
    Stuff3Component,
    AdDirective,
    TestsComponent,
    NavComponent,
    Content1Component,
    Content2Component,
    Content3Component,
    TestDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [AdService],
  bootstrap: [AppComponent]
})
export class AppModule { }
