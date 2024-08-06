import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import {NgModel} from '@angular/forms';

import { PageEvent } from '@angular/material/paginator';
// import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],

})
export class UserListComponent implements OnInit {

  users: any[] = [];
  totalUsers = 0;
  usersPerPage = 6;
  currentPage = 1;
  searchTerm: string = '';
  filteredUser:boolean=false
  filteredUsers: any[] = [];

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers(): void {
    this.userService.getUsers(this.currentPage).subscribe(response => {
      this.users = response.data;
      this.totalUsers = response.total;
      this.filteredUser=true
      console.log(this.users)
    });
  }
  onSearch() {
    this.filteredUsers = this.searchTerm ? this.users.filter(user =>
      user.id.toString().includes(this.searchTerm)
    ) : [];
    console.log(this.filteredUsers)

  }
  onPageChange(event: PageEvent): void {
    this.currentPage = event.pageIndex + 1;
    this.fetchUsers();
  }

  viewUser(id: number): void {
    this.router.navigate(['/user', id]);
  }
  
}
