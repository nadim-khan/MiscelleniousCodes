import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,FormBuilder,FormArray,Validators  } from '@angular/forms';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {
  roles=[
    {'role_no':1, 'role_name':'Nadeem Khan', 'sys_role':'Administrator', 'role_desc':'NA', 'role_c_date':'12/Dec/2019','role_u_date':'14/Dec/2019'},
    {'role_no':2, 'role_name':'Adil Khan', 'sys_role':'DBA', 'role_desc':'NA', 'role_c_date':'12/Dec/2019','role_u_date':'14/Dec/2019'},
    {'role_no':3, 'role_name':'Shyam Kumar Khan', 'sys_role':'Support', 'role_desc':'NA', 'role_c_date':'12/Dec/2019','role_u_date':'14/Dec/2019'},
    {'role_no':4, 'role_name':'Nadeem khanna', 'sys_role':'Manager', 'role_desc':'NA', 'role_c_date':'12/Dec/2019','role_u_date':'14/Dec/2019'},
    {'role_no':5, 'role_name':'Rahul Sheikh', 'sys_role':'Super Admin', 'role_desc':'NA', 'role_c_date':'12/Dec/2019','role_u_date':'14/Dec/2019'},
    {'role_no':6, 'role_name':'Kumar Khan', 'sys_role':'Administrator', 'role_desc':'NA', 'role_c_date':'12/Dec/2019','role_u_date':'14/Dec/2019'},
  ];
  orders=[
    { id: '1', name: 'order 1' },
    { id: '2', name: 'order 2' },
    { id: '3', name: 'order 3' },
    { id: '4', name: 'order 4' }
  ];
  constructor( private fb:FormBuilder) { }
  selData;
  createRole= this.fb.group({
    sys_role:['',Validators.required],
    role_name:['',Validators.required],
    role_desc:['',Validators.required],
  })
  editRole= this.fb.group({
    sys_role:['',Validators.required],
    role_name:['',Validators.required],
    role_desc:['',Validators.required],
  })

  public selectedRow(event, u) {
    this.selData=this.createRole.value;
    console.log("Selected Data : "+JSON.stringify(this.selData))
   }

  onCreateRole(createRole){
    console.log('Role Created : ',createRole.value);
    //console.save('Role Created : ',createRole.value);
    createRole.reset();
  }
  onUpdateRole(editRole){
    console.log('Role Updated : ',editRole.value);
    editRole.reset();
  }

  ngOnInit() {
//       function(console){

//     console.save = function(data, filename){

//         if(!data) {
//             console.error('Console.save: No data')
//             return;
//         }

//         if(!filename) filename = 'console.json'

//         if(typeof data === "object"){
//             data = JSON.stringify(data, undefined, 4)
//         }

//         var blob = new Blob([data], {type: 'text/json'}),
//             e    = document.createEvent('MouseEvents'),
//             a    = document.createElement('a')

//         a.download = filename
//         a.href = window.URL.createObjectURL(blob)
//         a.dataset.downloadurl =  ['text/json', a.download, a.href].join(':')
//         e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
//         a.dispatchEvent(e)
//     }
// })(console)
  }

}
