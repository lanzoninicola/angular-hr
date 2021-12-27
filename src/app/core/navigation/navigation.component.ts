import { Component, Input, OnInit } from '@angular/core';
import { NavItems } from '../interfaces/navItems';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit {
  @Input() navItems: NavItems = [];

  constructor() {}

  ngOnInit(): void {
    this.navItems = navItems;
  }
}

const navItems: NavItems = [
  {
    title: 'Users',
    route: 'users',
    icon: 'tuiIconUsers',
  },
  {
    title: 'Candidates',
    route: 'candidates',
    icon: 'tuiIconUser',
  },
  {
    title: 'Job ad',
    route: 'job-ad',
    icon: 'tuiIconFile',
  },
];
