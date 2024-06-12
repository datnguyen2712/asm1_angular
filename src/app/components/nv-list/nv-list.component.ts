import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { INhanVien } from '../../interfaces/inhan-vien';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-nv-list',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterModule, RouterOutlet],
  templateUrl: './nv-list.component.html',
  styleUrl: './nv-list.component.css'
})
export class NvListComponent {
  port: number = 3000;
  list_nhan_vien: INhanVien[] = [];
  ngOnInit(): void {
    fetch(`http://localhost:${this.port}/nhan_vien`)
    .then ( res => res.json())
    .then ( data => {
      this.list_nhan_vien = data;
    })
  }
}
