import { Component } from '@angular/core';
import { AppHeaderComponent } from "./app-header/app-header.component";
import { AppFooterComponent } from "./app-footer/app-footer.component";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [AppHeaderComponent, AppFooterComponent],
  templateUrl: './app-layout.component.html',
  styleUrl: './app-layout.component.scss'
})
export class AppLayoutComponent {

}
