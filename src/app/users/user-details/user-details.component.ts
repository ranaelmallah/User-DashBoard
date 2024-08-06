import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailComponent implements OnInit {

  user: any;

  constructor(private route: ActivatedRoute, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    const userId = this.route.snapshot.params['id'];
    this.userService.getUser(userId).subscribe(response => {
      this.user = response.data;
      console.log(this.user)
    });
  }

  goBack(): void {
    this.router.navigate(['/']);
  }
}
