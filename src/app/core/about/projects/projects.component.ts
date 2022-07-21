import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-about-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.css'],
    encapsulation: ViewEncapsulation.None,
})
export class ProjectsComponent {
    title = 'Projects';
}