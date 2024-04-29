import { Component, OnInit } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from '../services/data.service';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-employee-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    MatMenuModule,
    MatCardModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './employee-dashboard.component.html',
  styleUrl: './employee-dashboard.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class EmployeeDashboardComponent implements OnInit {
  posts: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.loadPosts();
  }

  loadPosts() {
    this.dataService.getPosts().subscribe((data) => {
      this.posts = data.data;
      console.log('**api response', this.posts[0].attributes);
    });
  }

  addPost() {
    const newPost = {
      data: { empId: 1002, empName: 'Emp2', empEmail: 'emp2@gmail.com' },
    };
    this.dataService.createPost(newPost).subscribe(() => {
      this.posts.unshift(newPost);
    });
    location.reload();
  }

  updatePost(post: any) {
    const updatedPost = { ...post, data: { empEmail: 'emp22@gmail.com' } };
    this.dataService.updatePost(post, updatedPost).subscribe(() => {
      const index = this.posts.findIndex((p) => p.id === post.id);
      this.posts[index] = updatedPost;
    });
    location.reload();
  }

  deletePost(id: number) {
    this.dataService.deletePost(id).subscribe(() => {
      this.posts = this.posts.filter((post) => post.id !== id);
    });
  }
}
