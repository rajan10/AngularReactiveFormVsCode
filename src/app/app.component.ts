import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app7';
//form which is created from FormGroup will be the model for the form.
  form = new FormGroup({
     //The FormControl is the model for the form. form controls are defined in the component class and linked to the template for easy validation and manipulation.
    //Each FormControl has an initial value of empty string '' and an array of validators applied (required and other validation).
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),  // this  is  formControlName="name" in template
    email: new FormControl('', [Validators.required, Validators.email]),  // this email is formControlName="email" in template
    body: new FormControl('', Validators.required)     // this body is formControlName="body" in template
  });

//The 'get f()' method returns the controls property of the form.  It provides a convenient way to access the FormControl instances in the template.
//This is a convenient way to access the FormControl instances in the template.
//get is a special keyword in TypeScript used to define a getter method.
// The f getter is a method that returns the controls property of the form group.
//Usage:
//In your template (app.component.html), you can now use f to access individual form controls. For example, f['name'] refers to the 'name' form control.
get f(){
    return this.form.controls; //controls like name, email and body are defined in the component class.
  }

  // logs the form's current values to the console.
  submit(){
    console.log(this.form.value);
  }

//The 'name' getter returns the 'name' FormControl instance.
get name(){
  return this.form.get('name');
}
}

// So in summary, it initializes a reactive form model with validators, binds it to template form elements via the controls, and allows submitting and retrieving 
//form values. The key steps are creating the FormGroup, adding FormControls with validators, and accessing the controls in the template to bind them.