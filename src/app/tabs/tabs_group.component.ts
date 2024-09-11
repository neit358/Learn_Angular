import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TabsPanelComponent } from './tabs_panel.component';

@Component({
  selector: 'tabsGroup',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="tab__headers">
      <div
        class="tab__header__item"
        *ngFor="let tab of tabPanelList; let idx = index"
        (click)="handleClickHeader(idx)"
      >
        {{ tab.title }}
        <button (click)="removeTab(tab)">x</button>
      </div>
    </div>

    <div class="tab-body" *ngIf="tabPanelList.length; else noTabs">
      <ng-container *ngTemplateOutlet="tabPanelList[activeIndex].panelBody"></ng-container>
    </div>

    <ng-template #noTabs> No tabs. </ng-template>
  `,
})
export class TabsGroupComponent {
  tabPanelList: TabsPanelComponent[] = [];

  @Input() activeIndex: number = 0;
  @Output() activeIndexChange = new EventEmitter<number>();

  addTab = (tab: TabsPanelComponent) => {
    this.tabPanelList = [...this.tabPanelList, tab];
  };

  removeTab = (tab: TabsPanelComponent): void => {
    let position = -1;

    this.tabPanelList = this.tabPanelList.filter((tabPanel, index) => {
      if (tabPanel === tab) {
        position = index;
        return false;
      }
      return true;
    });
    console.log(this.activeIndex);
    if (position === this.activeIndex) {
      this.activeIndexChange.emit(
        position === this.tabPanelList.length ? position - 1 : position
      );
    }
    if(this.activeIndex >= this.tabPanelList.length) {
      this.activeIndexChange.emit(
        this.tabPanelList.length - 1
      );
    }
  };

  handleClickHeader = (idx: number) => {
    console.log(this.activeIndex);
    this.activeIndexChange.emit(idx);
  }
}
