import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css'],
    encapsulation: ViewEncapsulation.None,
    standalone: false
})
export class AboutComponent {
    title = 'About';
}