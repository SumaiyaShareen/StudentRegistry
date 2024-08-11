import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  // This will hold the form data
  data = {
    name: '',
    email: '',
    mobile: '',
    address: '',
    password: ''
  };

  // This function is called on form submission
  doRegistration(values: any) {
    // Retrieve existing user records from local storage or initialize as an empty array
    let user_records: any[] = JSON.parse(localStorage.getItem('users') || '[]');

    // Check if the email already exists in the user records
    if (user_records.some((user: any) => user.email === values.email)) {
      alert('Duplicate Data');
    } else {
      // Add the new user record to the array
      user_records.push(values);

      // Save the updated user records array back to local storage
      localStorage.setItem('users', JSON.stringify(user_records));

      // Notify the user of successful registration
      alert(`Hi ${values.name}, You are Successfully Registered`);

      // Optionally reset the form
      this.resetForm();
    }
  }

  // Optional method to reset the form fields
  resetForm() {
    this.data = {
      name: '',
      email: '',
      mobile: '',
      address: '',
      password: ''
    };
  }
}
