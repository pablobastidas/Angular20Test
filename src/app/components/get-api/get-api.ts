import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-api',
  imports: [],
  templateUrl: './get-api.html',
  styleUrl: './get-api.css'
})
export class GetApi implements OnInit {
  http = inject(HttpClient);
  userList: any[] = [];
  todosList: any[] = [];
  busList:any[] = [];

  ngOnInit(): void {
    this.getUsers();
    this.getTodos();
    this.getBusBooking();
  }

  getUsers(){
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((result:any) => {
      this.userList = result;
    } 

    );
  }

  getTodos(){
    this.http.get("https://jsonplaceholder.typicode.com/todos").subscribe((response:any) => {
      this.todosList = response;
    });
  }

  getBusBooking(){
    this.http.get("https://api.freeprojectapi.com/api/BusBooking/GetAllUsers").subscribe((res:any) => {
      this.busList = res.data;
    });
  }

}
