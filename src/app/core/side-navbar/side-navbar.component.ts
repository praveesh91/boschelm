import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.scss'],
})
export class SideNavbarComponent implements OnInit {
  listItems: any[] = [];

  constructor(public el: ElementRef) {}

  ngOnInit() {
    this.listItems = [
      {
        label: 'لوحة البيانات',
        icon: 'pi pi-chart-bar',
        routerLink: ['/'],
      },
      {
        label: 'ادارة الحالات',
        icon: 'pi pi-images',
        routerLink: ['/'],
      },
      {
        label: 'التقارير',
        icon: 'pi pi-book',
        routerLink: ['/'],
      },
      {
        label: 'ادارة المستخدمين',
        icon: 'pi pi-users',
        routerLink: ['/'],
      },
      {
        label: 'ادارة الوظائف',
        icon: 'pi pi-briefcase',
        routerLink: ['/'],
      },
    ];
  }
}
