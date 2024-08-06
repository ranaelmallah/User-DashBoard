import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserDetailComponent } from './users/user-details/user-details.component';
import { HttpClientModule } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { RouterOutlet } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatBadgeModule} from '@angular/material/badge';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
// import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {MatListModule} from '@angular/material/list';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
  
    AppComponent,
    HeaderComponent,
    UserListComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterOutlet,BrowserAnimationsModule, BrowserAnimationsModule,
    MatCardModule,
    MatBadgeModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
ReactiveFormsModule,FormsModule,MatListModule


  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
