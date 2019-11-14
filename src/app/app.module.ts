import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { SkillsComponent } from './skills/skills.component';
import { SkillComponent } from './skill/skill.component';
import { QualificationsComponent } from './qualifications/qualifications.component';
import { ChordfinderComponent } from './chordfinder/chordfinder.component';
import baseUrl from './baseUrl';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { AppRoutingModule } from './app-routing/app-routing.module'
import { HttpClientModule } from '@angular/common/http';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDialogModule } from '@angular/material/dialog';

import 'hammerjs';
import { QuoteComponent } from './quote/quote.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AboutmeComponent,
    SkillComponent,
    SkillsComponent,
    QualificationsComponent,
    ChordfinderComponent,
    SkillComponent,
    QuoteComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    AppRoutingModule,
    HttpClientModule,
    MatGridListModule,
    MatProgressBarModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatDialogModule
  ],
  entryComponents:[
    QuoteComponent
  ],
  providers: [
    // Need to do in this way for const variable
    {provide: 'baseUrl', useValue: baseUrl}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
