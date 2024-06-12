import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-quanly',
  standalone: true,
  imports: [RouterLink, RouterOutlet, RouterModule],
  templateUrl: './quanly.component.html',
  styleUrl: './quanly.component.css'
})
export class QuanlyComponent {

}
