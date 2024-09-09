import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-examplev2',
  standalone: true,
  imports: [],
  templateUrl: './examplev2.component.html',
  styleUrl: './examplev2.component.scss'
})
export class Examplev2Component {
  @Input() name: string = '';
}
