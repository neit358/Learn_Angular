import { Component } from "@angular/core";

@Component({
    selector: "counter",
    standalone: true,
    template: `
        count: {{ count }}
    `,
    styles: `
        :host {
            display: block,
        }
    `
})
export class CounterComponent{
    static _count = 0;

    count = CounterComponent._count++;
}