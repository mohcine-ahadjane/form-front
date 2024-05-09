import { FormService } from './services/form.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'form-front';
  mode= "Save"
  users:any[] = [];
  user ={
    "id": "",
    "firstName": "",
    "lastName": "",
    "email": "",
    "password": ""
};
emptyUser ={
  "id": "",
  "firstName": "",
  "lastName": "",
  "email": "",
  "password": ""
};

  constructor(private formService: FormService) {}
  ngOnInit(): void {
    this.getAllUsers();
  }
  getAllUsers(){
    this.formService.getAllUsers().subscribe((res: any) => {
      this.users = res;
    });
  }

  loadModifyUser(id:any){
    this.formService.getUser(id).subscribe((res: any) => {
      this.user = res;
      this.mode = "Update";
    });
  }
  deleteUser(id:any){
    this.formService.deleteUser(id).subscribe((res: any) => {
      this.getAllUsers();
      console.log("user " + id + " deleted");
    });
  }
  save(){
    (this.mode=="Add")? this.saveUser(this.user) : this.updateUser(this.user);
    this.user=this.emptyUser;
  }
  saveUser(user:any){
    this.formService.saveUser(user).subscribe((res: any) => {
      this.getAllUsers();
      console.log("user is saved",user);
    });
  }
  updateUser(user:any){
    this.formService.updateUser(user, user.id).subscribe((res: any) => {
      this.getAllUsers();
      this.mode="Add";
      console.log("user is updated",user);
    });
  }

}
