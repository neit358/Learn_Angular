import { Component, Input, OnChanges, OnInit, SimpleChanges } from "@angular/core";

@Component({
    selector: 'app-examplev4',
    standalone: true,
    template: `
        <div
        class="progress-bar-container"
        [style.backgroundColor]="backgroundColor">
        <div
            class="progress"
            [style]="{
                backgroundColor: progressColor,
                width: progress + '%'
            }">
        </div>
        </div>
    `,
    styles: `
        .progress-bar-container,
        .progress {
            height: 20px;
        }

        .progress-bar-container {
            width: 100%;
        }

    `,

})
export class Examplev4Component implements OnInit, OnChanges {
    @Input() progress = 50; 
    backgroundColor = 'yellow';
    progressColor = 'red';

    ngOnInit(): void {
    }

    ngOnChanges(changes: SimpleChanges): void {
    }
}

