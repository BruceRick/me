import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-resume',
    templateUrl: './resume.component.html',
    styleUrls: ['./resume.component.css'],
    encapsulation: ViewEncapsulation.None,
})
export class ResumeComponent {
    title = 'Resume';
    pdfSource =  "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";
}