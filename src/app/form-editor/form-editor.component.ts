import { Component } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-editor',
  templateUrl: './form-editor.component.html',
  styleUrls: ['./form-editor.component.css']
})
export class FormEditorComponent {

  email: FormControl | undefined;

  ngOnInit() {
    this.email = new FormControl("noua@gmail.com", Validators.required);
  }


}
