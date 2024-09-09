import { Component, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'contentProjection',
  standalone: true,
  templateUrl: './contentProjection.component.html',
  styleUrl: './contentProjection.component.scss',
})
export class ContentProjectionComponent {
    @Input() checked: boolean = false;
    @Output() checkedChange = new EventEmitter<boolean>()

    handleToggle = () => {
        this.checkedChange.emit(!this.checked)
    }
}
