import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dangky',
  standalone: true,
  imports: [RouterLink ,RouterOutlet, RouterModule],
  templateUrl: './dangky.component.html',
  styleUrl: './dangky.component.css'
})
export class DangkyComponent {

}
