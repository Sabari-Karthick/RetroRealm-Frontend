import { Component } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { ToolbarModule } from 'primeng/toolbar';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ToolbarModule, AvatarModule],
  templateUrl: './app-header.component.html',
  styleUrl: './app-header.component.scss'
})
export class AppHeaderComponent {

}
