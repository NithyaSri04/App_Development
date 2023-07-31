import React, { useState } from 'react';
import './index.css';
import { useNavigate } from 'react-router-dom';

const ApplyJobs = () => {
  const navigate=useNavigate();
  const [firstname,setFirstName]=useState('');
  const [middlename, setMiddleName] = useState('');
  const [lastname, setLastName] = useState('');
  const [dateofbirth, setDateOfBirth] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [position, setPosition] = useState('');
  const [employmentstatus, setEmploymentStatus] = useState('');
  const OnformSubmit=()=>{
    if(firstname==="" ){
      alert("Please fill the name first")
    }
else{
    alert("Your Job Application has been Applied Successfully")
    navigate("/Jobs")

}
  }
  return (
    <div className="apply-job">
      <div className="container">
        <header className="header">
          <h1 className="post-job">Fill the form </h1>
        </header>
        <form>
          <div className="form-group">
            <label id="name-label" for="name">
              First Name
            </label>
            <input
              type="text"
              name="firstname"
              value={firstname}
              className="form-control"
              placeholder=" First Name"
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            </div>
            <div className="form-group">
            <label id="name-label" for="name">
              Middle Name
            </label>
            <input
              type="text"
              name="middlename"
              value={middlename}
              className="form-control"
              placeholder="Middle Name"
              onChange={(e) => setMiddleName(e.target.value)}
              required
            />
            </div>
            <div className="form-group">
            <label id="name-label" for="name">
             Last Name
            </label>
            <input
              type="text"
              name="lastname"
              value={lastname}
              className="form-control"
              placeholder="Last Name"
              onChange={(e) => setLastName(e.target.value)}
              required
            />
            </div>
            <div className="form-group">
            <label id="dateofbirth-label" for="dateofbirth">
             Date Of Birth
            </label>
            <input
              type="date"
              name="dateofbirth"
              value={dateofbirth}
              className="form-control"
              placeholder="DOB"
              onChange={(e) => setDateOfBirth(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label id="email-label" for="name">
             Email
            </label>
            <input
              type="text"
              name="email"
              value={email}
              className="form-control"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            </div>
            <div className="form-group">
            <label id="phone-label" for="name">
             Phone
            </label>
            <input
              type="text"
              name="Phone"
              value={phone}
              className="form-control"
              placeholder="Phone"
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            </div>
            <div className="form-group">
            <label id="position-label" for="name">
             What Position are you looking for?
            </label>
            <input
              type="text"
              name="position"
              value={position}
              className="form-control"
              placeholder="Position"
              onChange={(e) => setPosition(e.target.value)}
              required
            />
            </div>
            <div className="form-group">
            <label id="employmentStatus-label" for="name">
             What is your current employment status?
            </label>
            <input
              type="text"
              name="employmentstatus"
              value={employmentstatus}
              className="form-control"
              placeholder="Employment Status"
              onChange={(e) => setEmploymentStatus(e.target.value)}
              required
            />
            </div>
          <div className="form-group">
            <label>
              Upload Your Resume
            </label>
            <label>
              <input type="file" id="myFile" name="filename" required />
            </label>
          </div>
          <div className="form-group">
            <button
              type="submit"
              className="submit-button"
              onClick={OnformSubmit}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ApplyJobs;
