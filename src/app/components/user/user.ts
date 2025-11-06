import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  imports: [FormsModule],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User implements OnInit{
  // nombreUser = "Pablo Bastidas"

  userList : any[] = [];

  userObj : any = {
    "userId": 0,
    "emailId": "",
    "password": "",
    "fullName": "",
    "mobileNo": ""
  }

  http = inject(HttpClient);

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.http.get("https://api.freeprojectapi.com/api/GoalTracker/getAllUsers").subscribe((res:any) => {
      this.userList = res;
    });
  }

  onSaveUser(){
    this.http.post("https://api.freeprojectapi.com/api/GoalTracker/register", this.userObj).subscribe({
      next:(result)=>{
        alert("Usuario creado exitosamente!!!");
        this.getUsers();
      },
      error:(error)=>{
        alert("Error: " + error.error)
      }
    });
  }

}
