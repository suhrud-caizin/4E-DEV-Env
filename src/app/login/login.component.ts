import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { FormGroup, FormControl } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { TokenStorageService } from '../token-storage.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
status:'success'|'fail'='success';
  constructor(private fb: FormBuilder,private router:Router,private sc:TokenStorageService,private as:AuthService) {

   }

  ngOnInit(): void {
    console.log(' login init')
    if(this.sc.getToken()){
      console.log('login init2')
      this.router.navigate(['/home']);
    }
    console.log('login init23')
    
  }
  profileForm = this.fb.group({
    UserName: ['',[Validators.email,Validators.required,Validators.minLength(4)]],   //Validators.minLength(4)
    Password: ['',[Validators.required,Validators.minLength(4)]],    //Validators.minLength(4)
   
  });
  
  onSubmit(){
    console.log("submitted!");
    console.log(this.profileForm.value.UserName)
    console.log(this.profileForm)
    this.as.login(this.profileForm.value.UserName,this.profileForm.value.Password).subscribe(
      (data)=>{
        console.log(data);
        this.sc.saveToken(data.response);
      this.sc.saveUser(data)
      this.router.navigate(['/home']);
      console.log('after nav')
      },
      (err)=>{
        this.status='fail';
      }
    )
    
   

    
  }
  rememberMe($event:any){
  
  
    this.sc.rememberMe=$event.target.checked;
 
  }
  get UserName() { return this.profileForm.get('UserName'); }

get Password() { return this.profileForm.get('Password'); }
  
}
