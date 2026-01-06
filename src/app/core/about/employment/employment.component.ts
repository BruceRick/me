import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-about-employment',
    templateUrl: './employment.component.html',
    styleUrls: ['./employment.component.css'],
    encapsulation: ViewEncapsulation.None,
    standalone: false
})
export class EmploymentComponent {
    title = 'Employment';
}