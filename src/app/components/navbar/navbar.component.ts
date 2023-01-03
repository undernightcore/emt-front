import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  @Input() title = ''
  @Input() hideControls = false
  @Output() back = new EventEmitter();
  @Output() refresh = new EventEmitter();
}
