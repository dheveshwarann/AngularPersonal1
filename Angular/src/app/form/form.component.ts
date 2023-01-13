import { Component,OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  // myForm: FormGroup;
  myForm:any;

  constructor(private fb: FormBuilder){

  }
  ngOnInit(){
    this.myForm = this.fb.group({
      email:'',
      message:''
    });
    this.myForm.valueChanges.subscribe(console.log)

  }
}
