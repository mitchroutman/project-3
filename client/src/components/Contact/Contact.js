import React, { useState } from 'react';
import { checkPassword, validateEmail } from '../../utils/helpers';
import "./Contact.css";

export default function Contact () {
    // Create state variables for the fields in the form
    // We are also setting their initial values to an empty string
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [subject, setSubject] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const handleInputChange = (e) => {
      // Getting the value and name of the input which triggered the change
      const { target } = e;
      const inputType = target.name;
      const inputValue = target.value;
      // Based on the input type, we set the state of either email, username, and password
      if (inputType === 'email') {
        setEmail(inputValue);
      } else if (inputType === 'userName') {
        setUserName(inputValue);
      } else {
        setSubject(inputValue);
      }
    };
    const handleFormSubmit = (e) => {
      // Preventing the default behavior of the form submit (which is to refresh the page)
      e.preventDefault();
      // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
      if (!validateEmail(email) || !userName) {
        setErrorMessage('Email or username is invalid');
        // We want to exit out of this code block if something is wrong so that the user can correct it
        return;
        // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
      }
      alert(`Hello ${userName}`);
      // If everything goes according to plan, we want to clear out the input after a successful registration.
      setUserName('');
      setSubject('');
      setEmail('');
  };
  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's chat</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_4e5An71TVIRGtPVmTLf87PQhhJSj3DGT3mGauPqukC0IeU1_NEkS6ngBI6pfUwIfOWk&usqp=CAU" alt="" className="c-icon" />
              +1 1234 556 75
            </div>
            <div className="c-info-item">
              <img className="c-icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgGWNixrXfkjnfdzBf0kXHROBh-8ZPTLvOnA&usqp=CAU" alt="" />
              Shifrawagsahll@gmail.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRh-5664Cfs2snsLO9aTMKJAGQ0s2IA0yGkg&usqp=CAU" alt="" />
             Brooklyn, New York
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What’s your story?</b> Have any questions or inquiries, contact me!
          </p>
          <form >
            <input  value={userName}
              name="userName"
              onChange={handleInputChange}
              type="text"
              placeholder="username" />
            <input  value={subject}
              name="Subject"
              onChange={handleInputChange}
              type="text"
              placeholder="subject" />
            <input  value={email}
                name="email"
                onChange={handleInputChange}
                type="email"
                placeholder="email" />
            <textarea  rows="5" placeholder="Message" name="message" />
            <button type="button" onClick={handleFormSubmit}>Submit</button>
          </form>
          {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
        </div>
      </div>
    </div>
  );
};