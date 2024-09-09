import { Component, Input } from "@angular/core";

@Component ({
    selector: 'Example',
    standalone: true,
    template: `<p>{{name}} Dưới 18 tủi</p>`
})
export class ExampleComponent {
    @Input() name: string = '';
}