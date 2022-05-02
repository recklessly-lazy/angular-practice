import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit, OnChanges {

  registrationForm!: FormGroup;
  submitted!: boolean;
  firstName!: FormControl;
  constructor(private formBuilder: FormBuilder) { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("inside onchange!");
    // throw new Error('Method not implemented.');
  }

  zipCheck!: any;




  ngOnInit(): void {

    this.registrationForm = this.formBuilder.group({
      firstName: ['', { updateOn: 'blur', initialValueIsDefault: true, validators: [] }],
      lastName: ['', Validators.required],
      address: this.formBuilder.group({
        street: [],
        city: [],
        zip: ['', validatePin]
      })
    });
    // (function () {
    //   console.log(`form: ${new RegistrationFormComponent(new FormBuilder()).registrationForm.controls['address'].get('zip')}`);
    // })()
    // this.zipCheck = 
    // this.zipCheck
    // console.log(`zipcheck: ${this.zipCheck}`);
  }


}
function validatePin(pincode: FormControl) {
  return pincode.value.length === 6 ? null : {
    message: "pincode should be exactly 6 characters long"
  }
}
function validateFirstname(control: FormControl) {

  console.log("validate name called");
  let len = control.value.length
  console.log(`len = ${control.value.length}`);
  let isValid = control.value.length === 6
  console.log(`isvalid: ${isValid}`);
  return isValid ? null : {
    message: "name should be 6 chars long"
  }
}
