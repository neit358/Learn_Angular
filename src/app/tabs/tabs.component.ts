import { CommonModule } from "@angular/common";
import { Component, Input, TemplateRef } from "@angular/core";
@Component({
    selector: "tabs",
    standalone: true,
    imports: [CommonModule],
    templateUrl: "./tabs.component.html",
})
export class TabsComponent{
    @Input() navs: string[] = [];
    @Input() linkTemplate: TemplateRef<any> | undefined;
}
