import { Component } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.scss']
})
export class Form2Component {

  myForm2: any

  constructor(private fb: FormBuilder){

  }
  ngOnInit() {

    const phone = this.fb.group({ 
      area: [],
      prefix: [],
      line: [],
    })
  
    this.myForm2 = this.fb.group({
      email: '',
      homePhone: phone,
      cellPhone: phone,
    })
  }
}
