import { AfterViewInit, ChangeDetectorRef, Component, ContentChild, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
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
export class TabsPanelComponent implements AfterViewInit {
  @Input() title!: string;
  @ViewChild(TemplateRef, { static: true }) implicitBody!: TemplateRef<unknown>;
  @ContentChild(TemplateRef, { static: true, read: TemplateRef }) explicitBody!: TemplateRef<unknown>;

  constructor(private tabsGroup: TabsGroupComponent) {}

  // ngOnInit() {
  //   this.tabsGroup.addTab(this);
  // }

  get panelBody(): TemplateRef<unknown> {
    return this.explicitBody || this.implicitBody;
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.tabsGroup.addTab(this);
    });
  }
}
