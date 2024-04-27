import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatMenuModule, MatButtonModule, MatSelectModule, MatInputModule, MatFormFieldModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})


export class AppComponent {
  title = 'employee-app';
}
