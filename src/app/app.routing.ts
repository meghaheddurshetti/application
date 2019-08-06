import { Routes,RouterModule } from "@angular/router";
import { ProductdisplayComponent } from './productdisplay/productdisplay.component';
import { ProductaddComponent } from './productdisplay/productadd/productadd.component';
import { UserdisplayComponent } from './userdisplay/userdisplay.component';
import { SignupComponent } from './userdisplay/signup/signup.component';
import { EdituserComponent } from './userdisplay/edituser/edituser.component';
import { EditproductComponent } from './productdisplay/editproduct/editproduct.component';
import { EdittaskComponent } from "./taskdisplay/edittask/edittask.component";

import { TaskaddComponent } from './taskdisplay/taskadd/taskadd.component';
import { TaskdisplayComponent } from './taskdisplay/taskdisplay.component';
const arr : Routes=[
  {path:'',component:ProductdisplayComponent},
  {path:'addproduct',component:ProductaddComponent},
  {path:'addtask',component:TaskaddComponent},
  {path:'editproduct/:pro_id',component:EditproductComponent},
  {path:'users',component:UserdisplayComponent},
  {path:'task',component:TaskdisplayComponent},
  {path:'signup',component:SignupComponent},
  {path:'edituser/:user_email',component:EdituserComponent},
  {path:'edittask/:id',component:EdittaskComponent},
  {path:'**',redirectTo:'/pagenotfound'},

];

export const routing=RouterModule.forRoot(arr);
