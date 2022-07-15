import { NgModule } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from    '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';

import { AppRoutingModule } from '../app-routing.module';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EducationComponent } from './about/education/education.component';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    AboutComponent,
    HomeComponent,
    NavbarComponent,
    EducationComponent
  ],
  imports: [
    AppRoutingModule,
    SharedModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    MatTabsModule
  ],
  exports: [
    AppRoutingModule,
    NavbarComponent
  ],
  providers: [
  ]
})
export class CoreModule {}