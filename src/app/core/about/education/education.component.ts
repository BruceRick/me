import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-about-education',
    templateUrl: './education.component.html',
    styleUrls: ['./education.component.css'],
    encapsulation: ViewEncapsulation.None,
    standalone: false
})
export class EducationComponent {
    title = 'Education';
}