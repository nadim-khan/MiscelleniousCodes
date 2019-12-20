import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  roles=[
    {'role_no':1, 'role_name':'Nadeem Khan', 'sys_role':'Administrator', 'role_desc':'NA', 'role_c_date':'12/Dec/2019','role_u_date':'14/Dec/2019'},
    {'role_no':1, 'role_name':'Adil Khan', 'sys_role':'DBA', 'role_desc':'NA', 'role_c_date':'12/Dec/2019','role_u_date':'14/Dec/2019'},
    {'role_no':1, 'role_name':'Shyam Kumar Khan', 'sys_role':'Support', 'role_desc':'NA', 'role_c_date':'12/Dec/2019','role_u_date':'14/Dec/2019'},
    {'role_no':1, 'role_name':'Nadeem khanna', 'sys_role':'Manager', 'role_desc':'NA', 'role_c_date':'12/Dec/2019','role_u_date':'14/Dec/2019'},
    {'role_no':1, 'role_name':'Rahul Sheikh', 'sys_role':'Super Admin', 'role_desc':'NA', 'role_c_date':'12/Dec/2019','role_u_date':'14/Dec/2019'},
    {'role_no':1, 'role_name':'Kumar Khan', 'sys_role':'Administrator', 'role_desc':'NA', 'role_c_date':'12/Dec/2019','role_u_date':'14/Dec/2019'},
  ]

  constructor() { }

  ngOnInit() {
  }

}
