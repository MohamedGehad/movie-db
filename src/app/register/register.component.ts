import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup , Validator, Validators} from '@angular/forms'
import {AuthService} from '../auth.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  

  constructor (public _AuthService:AuthService) { }

    registerForm:FormGroup = new FormGroup({
        'First_name':new FormControl(null,[ Validators.required ,Validators.minLength(3)]),
        'lasr_name':new FormControl(null,[ Validators.required ,Validators.minLength(3)]),
        'age':new FormControl(null ,[Validators.required, Validators.min(16), Validators.max(60)]),
        'email':new FormControl(null , [Validators.required, Validators.email]),
        'password':new FormControl( null ,[Validators.required , Validators.min(4)]),

    })


  ngOnInit(): void {
  }

   getFormData(formData)
  {

    if(formData.valid == true)
    {
      this._AuthService.signUp(formData.value).subscribe(data =>
        {
             
        console.log(data);
      });
       // console.log(FormData.value)

    }
  }

}
