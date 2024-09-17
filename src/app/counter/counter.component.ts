import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
    selector: "counter",
    standalone: true,
    imports: [RouterModule],
    template: `
        count: {{ count }}
        <br/>
        <router-outlet></router-outlet>
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