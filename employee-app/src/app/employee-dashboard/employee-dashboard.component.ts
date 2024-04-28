import { Component, OnInit } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {merge} from 'rxjs';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from '../data.service';
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-employee-dashboard',
  standalone: true,
  imports: [CommonModule,HttpClientModule,MatMenuModule, MatButtonModule, MatSelectModule, MatInputModule, MatFormFieldModule, FormsModule, ReactiveFormsModule ],
  templateUrl: './employee-dashboard.component.html',
  styleUrl: './employee-dashboard.component.css',
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class EmployeeDashboardComponent implements OnInit {
  posts: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.loadPosts();
  }

  loadPosts() {
    this.dataService.getPosts().subscribe((data) => {
      this.posts = data;
    });
  }

  addPost() {
    console.log("add post hitted******")
    const newPost = { title: 'New Post', body: 'This is a new post.', userId: 1 };
    this.dataService.createPost(newPost).subscribe(() => {
      this.posts.unshift(newPost);  // For demonstration, prepend locally
    });
  }

  // updatePost(post: any) {
  //   const updatedPost = { ...post, title: 'Updated Title' };
  //   this.dataService.updatePost(post.id, updatedPost).subscribe(() => {
  //     const index = this.posts.findIndex((p) => p.id === post.id);
  //     this.posts[index] = updatedPost;  // For demonstration, update locally
  //   });
  // }

  // deletePost(id: number) {
  //   this.dataService.deletePost(id).subscribe(() => {
  //     this.posts = this.posts.filter((post) => post.id !== id);
  //   });
  // }
}
