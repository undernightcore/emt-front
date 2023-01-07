import { Component, EventEmitter, Output } from '@angular/core';
import { TabEnum } from '../../interfaces/tab';

@Component({
  selector: 'app-subheader',
  templateUrl: './subheader.component.html',
  styleUrls: ['./subheader.component.scss'],
})
export class SubheaderComponent {
  @Output() tab = new EventEmitter<TabEnum>();
  #selectedTab: TabEnum = TabEnum.TICKETS;
  tabEnum = TabEnum;

  get selectedTab() {
    return this.#selectedTab;
  }

  set selectedTab(value: TabEnum) {
    this.#selectedTab = value;
    this.tab.emit(value);
  }
}
