import { Component, Input } from "@angular/core";

@Component({
    selector: 'binding',
    standalone: true,
    template: `
        Hello xin chào <span>{{name}}</span>
    `
})
export class BindingComponent{
    @Input() name: string = '';
}
