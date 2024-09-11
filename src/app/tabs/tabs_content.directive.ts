import { Directive } from "@angular/core";

@Directive({
    selector: 'ng-template[tabContent]',
    standalone: true,
})
export class TabsContentDirective{}