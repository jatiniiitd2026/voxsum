import {Pipe, PipeTransform} from '@angular/core';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';

@Pipe({
    name: 'safeHTML'
})
export class SafeHtmlPipe implements PipeTransform {

    constructor(private sanitize: DomSanitizer) {
    }

    transform(value: string): SafeHtml {
        return this.sanitize.bypassSecurityTrustHtml(value);
    }
}
