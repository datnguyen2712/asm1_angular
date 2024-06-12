import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DuanListComponent } from './components/duan-list/duan-list.component';
import { DuanThemComponent } from './components/duan-them/duan-them.component';
import { NvListComponent } from './components/nv-list/nv-list.component';
import { NvThemComponent } from './components/nv-them/nv-them.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskThemComponent } from './components/task-them/task-them.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AboutComponent } from './components/about/about.component';
import { DangnhapComponent } from './components/dangnhap/dangnhap.component';
import { DangkyComponent } from './components/dangky/dangky.component';
import { QuanlyComponent } from './components/quanly/quanly.component';

export const routes: Routes = [
    {path: '', component:HomeComponent, title: 'Trang chủ'},
    {path: 'quan_ly', component: QuanlyComponent},
    {path: 'du_an', component:DuanListComponent, title: 'Danh sách dự án'},
    {path: 'du_an/them', component:DuanThemComponent, title: 'Thêm dự án'},
    {path: 'nhan_vien', component:NvListComponent, title: 'Danh sách nhân viên'},
    {path: 'nhan_vien/them', component:NvThemComponent, title: 'Thêm nhân viên'},
    {path: 'task', component:TaskListComponent, title: 'Danh sách task'},
    {path: 'task/them', component:TaskThemComponent, title: 'Thêm task'},
    {path: 'about', component: AboutComponent, title: 'Giới thiệu'},
    {path: 'dang_ky', component: DangkyComponent, title: 'Đăng ký'},
    {path: 'dang_nhap', component: DangnhapComponent, title: 'Đăng nhập'},
    {path: '**', component:NotFoundComponent, title: 'Không tìm thấy'},
];
