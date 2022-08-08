import { NgModule } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from    '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { PdfViewerModule } from 'ng2-pdf-viewer';

import { AppRoutingModule } from '../app-routing.module';

import { NavbarComponent } from './navbar/navbar.component';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ResumeComponent } from './resume/resume.component';

import { EducationComponent } from './about/education/education.component';
import { EmploymentComponent } from './about/employment/employment.component';
import { ProjectsComponent } from './about/projects/projects.component';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    NavbarComponent,

    HomeComponent,
    AboutComponent,
    ResumeComponent,

    EducationComponent,
    EmploymentComponent,
    ProjectsComponent
  ],
  imports: [
    AppRoutingModule,
    SharedModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    MatTabsModule,
    PdfViewerModule
  ],
  exports: [
    AppRoutingModule,
    NavbarComponent
  ],
  providers: [
  ]
})
export class CoreModule {}