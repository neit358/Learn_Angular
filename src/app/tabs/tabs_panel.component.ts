import { AfterViewInit, Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { TabsGroupComponent } from './tabs_group.component';

@Component({
  selector: 'tabsPanel',
  standalone: true,
  template: `
    <ng-template>
      <ng-content> </ng-content>
    </ng-template>
  `,
})
export class TabsPanelComponent implements OnInit {
  @Input() title: string | undefined;
  @ViewChild(TemplateRef, { static: true }) panelBody!: TemplateRef<unknown>;

  constructor(private tabsGroup: TabsGroupComponent) {}

  ngOnInit() {
    this.tabsGroup.addTab(this);
  }

//   ngAfterViewInit() {
//     this.tabsGroup.addTab(this);
//   }
}
