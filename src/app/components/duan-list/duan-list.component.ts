import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IDuAn } from '../../interfaces/idu-an';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-duan-list',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterModule, RouterOutlet],
  templateUrl: './duan-list.component.html',
  styleUrl: './duan-list.component.css'
})
export class DuanListComponent {
  port: number = 3000;
  list_du_an: IDuAn[] = [];
  ngOnInit(): void {
    fetch(`http://localhost:${this.port}/du_an`)
    .then ( res => res.json())
    .then ( data => {
      this.list_du_an = data;
    })
  }
}
