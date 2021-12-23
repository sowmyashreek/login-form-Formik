# login-form-Formik
login form with validation using Formik(Formik is a small library that can help you with the three most annoying aspects of creating forms in React:  Getting values in and out of the form state Validation and error messages Handling form submission)
This form has the following:

Email field
Password field
Submit button
This form has implemented the following input validation rules:

If the username or password inputs are empty, display the message "Field required" under the text input.
If the username is not in an email format, display the message "Username should be an email" under the text input.
If the username and password pass the above validations, then display the message "Login Successful" in an alert box.
Your form should implement the following specific details:

The email input field should have the ID emailField
The email error message should be within a div element that has the ID emailError
The password input field should have the ID pswField
The password error message should be within a div element that has an ID pswError
The submit button should have an ID submitBtn
The starter code can be found inside src/App.js
