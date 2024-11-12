import React from 'react';

function UserReport() {
  return (
    <div className="userReport-container">
      <h2 className="userReport-heading">Report & Queries</h2>
      <form className="userReport-form">
        <div className="userReport-row">
          <div className="userReport-field">
            <label className="userReport-label">Enter name</label>
            <input type="text" placeholder="Enter full name" className="userReport-input" />
          </div>
          <div className="userReport-field">
            <label className="userReport-label">Enter e-mail id</label>
            <input type="email" placeholder="example.@gmail.com" className="userReport-input" />
          </div>
        </div>
        <div className="userReport-row">
          <div className="userReport-field">
            <label className="userReport-label">Enter mobile number</label>
            <input type="tel" placeholder="+91 95*****862" className="userReport-input" />
          </div>
          <div className="userReport-field">
            <label className="userReport-label">Select service</label>
            <select className="userReport-select">
              <option>Select service</option>
              <option>Service 1</option>
              <option>Service 2</option>
            </select>
          </div>
        </div>
        <div className="userReport-field">
          <label className="userReport-label">Description</label>
          <textarea placeholder="Enter job details" className="userReport-textarea" />
        </div>
        <button type="submit" className="userReport-submitButton">Submit</button>
      </form>
    </div>
  );
}

export default UserReport;
