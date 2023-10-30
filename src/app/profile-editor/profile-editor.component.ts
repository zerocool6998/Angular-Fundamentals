import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent {
  // first Meth
  // profileForm = new FormGroup({
  //   firstName : new FormControl(''),
  //   lastName : new FormControl(''),
  //   address: new FormGroup({
  //     city: new FormControl(''),
  //     zipCode: new FormControl('')
  //   })
  // });
  constructor(private fb: FormBuilder) {};
  
  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.fb.group({
      city: [''],
      zipCode: ['']
    })
  })


// validating form Input


  onSubmit(){
    console.warn(this.profileForm.value);
  }
  updateProfile(){
    this.profileForm.patchValue({
      lastName: "dokali",
      address: {
        city: "dokala",
        zipCode: "023654",
      }
    });
  }
}
