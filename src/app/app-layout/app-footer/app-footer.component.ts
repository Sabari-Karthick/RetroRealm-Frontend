import { Component } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { Button } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ToolbarModule, AvatarModule, Button],
  templateUrl: './app-footer.component.html',
  styleUrl: './app-footer.component.scss'
})
export class AppFooterComponent {

  test():void{
    alert("Hello World");
  }

}
