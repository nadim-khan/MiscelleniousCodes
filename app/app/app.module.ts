import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
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

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    AdminComponent,
    UserManagementComponent,
    SystemConfigurationComponent,
    PnfComponent,
    RoleComponent,
    DepartmentComponent,
    UserComponent,
    AppAuthComponent,
    FuncSecurityComponent,
    WorkflowConfigComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
