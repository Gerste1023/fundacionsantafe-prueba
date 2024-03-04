import { Component, OnInit } from '@angular/core';
import { MENU } from '../../menu';

@Component({
  selector: 'app-default-sidebar',
  templateUrl: './default-sidebar.component.html',
  styleUrls: ['./default-sidebar.component.css'],
})
export class DefaultSidebarComponent implements OnInit {
  menu = MENU;

  constructor() { }

  ngOnInit(): void { }
}
