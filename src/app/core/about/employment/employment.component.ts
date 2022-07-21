import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-about-employment',
    templateUrl: './employment.component.html',
    styleUrls: ['./employment.component.css'],
    encapsulation: ViewEncapsulation.None,
})
export class EmploymentComponent {
    title = 'Employment';
}