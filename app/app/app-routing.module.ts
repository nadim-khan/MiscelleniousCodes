import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { UserManagementComponent } from './admin/user-management/user-management.component';
import { SystemConfigurationComponent } from './admin/system-configuration/system-configuration.component';
import { PnfComponent } from './pnf/pnf.component';
import { RoleComponent } from './admin/user-management/role/role.component';
import { DepartmentComponent } from './admin/user-management/department/department.component';
import { UserComponent } from './admin/user-management/user/user.component';
import { AppAuthComponent } from './admin/user-management/app-auth/app-auth.component';
import { FuncSecurityComponent } from './admin/user-management/func-security/func-security.component';
import { WorkflowConfigComponent } from './admin/user-management/workflow-config/workflow-config.component';


const routes: Routes = [
  { path:'', component:HomeComponent },
  { path:'home', component:HomeComponent },
  { path:'admin', component:AdminComponent,
    children:[
      { path:'userManagement', component:UserManagementComponent,
        children:[
          { path:'role', component:RoleComponent },
          { path:'department', component:DepartmentComponent },
          { path:'user', component:UserComponent},
          { path:'appAuth', component:AppAuthComponent },
          { path:'funcSecurity', component:FuncSecurityComponent },
          { path:'workflowConf', component:WorkflowConfigComponent },
        ]
      } ,
      { path:'systemConfig', component:SystemConfigurationComponent },
    ]
  },
  { path:'**', component:PnfComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
