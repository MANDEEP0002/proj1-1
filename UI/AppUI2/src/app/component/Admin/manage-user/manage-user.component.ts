import { Component, inject, OnInit } from '@angular/core';
import { UserInfo } from '../../../model/model';
import { AdminService } from '../../../services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-user',
  standalone: true,
  imports: [],
  templateUrl: './manage-user.component.html',
  styleUrl: './manage-user.component.css'
})
export class ManageUserComponent implements OnInit {
  users: UserInfo[] = [];
  adminServices = inject(AdminService)
  router = inject(Router)

ngOnInit(): void {
  this.getAllUGetAllWhiteListedUserInfoserInfo();
}

getAllUserInfo() {
  const currentUser = sessionStorage.getItem('userId'); // Retrieve current user ID
  this.adminServices.getAllUserInfo().subscribe((res: any) => {
    this.users = res.data.filter((user: any) => user.userId !== currentUser); // Exclude current user
  });
}

getAllUGetAllWhiteListedUserInfoserInfo() {
  const currentUser = sessionStorage.getItem('userId'); // Retrieve current user ID
  this.adminServices.GetAllWhiteListedUserInfo().subscribe((res: any) => {
    this.users = res.data.filter((user: any) => user.userId !== currentUser);
  });
}

banUser(Id: string){
  this.adminServices.banUser(Id).subscribe((res: any)=> {
    alert(res.username + " banned");
    window.location.reload();
  })
}

editUser(Id: string){
  this.adminServices.editUser = Id;
  this.router.navigateByUrl("layout/manage-user-roles")
}

}