import { Component, Inject, Injectable, OnInit } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { Button } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ToolbarModule, AvatarModule, Button, MenuModule],
  templateUrl: './app-header.component.html',
  styleUrl: './app-header.component.scss',
})
export class AppHeaderComponent implements OnInit {
  items!: MenuItem[];
  retroMenuItems!: MenuItem[];

  constructor(@Inject(Router) private router: Router) {}

  ngOnInit() {
    this.items = [
      {
        label: 'Options',
        items: [
          {
            label: 'Refresh',
            icon: 'pi pi-refresh',
          },
          {
            label: 'Export',
            icon: 'pi pi-upload',
          },
        ],
      },
    ];

    this.retroMenuItems = [
      {
        label: 'Options',
        items: [
          {
            label: 'Refresh',
            icon: 'pi pi-refresh',
          },
          {
            label: 'Export',
            icon: 'pi pi-upload',
          },
        ],
      },
    ];
  }

  test(): void {
    alert('Hello World');
  }

  call(): void {
    alert('Call ..');
  }

  notify(): void {
    alert('Get my notifications ..');
  }
}
