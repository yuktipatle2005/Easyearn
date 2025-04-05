import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/JobForms.css";

const JobSeekerRegister = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    contact: "",
    location: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/job-seeker/preferences");
  };

  return (
    <div className="form-container">
      <h2>Job Seeker Registration</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Full Name" onChange={handleChange} required />
        <input type="number" name="age" placeholder="Age" onChange={handleChange} required />
        <select name="gender" onChange={handleChange} required>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <input type="tel" name="contact" placeholder="Contact Number" onChange={handleChange} required />
        <input type="text" name="location" placeholder="Location (City, Area, Pincode)" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Create Password" onChange={handleChange} required />
        <button type="submit">Create Account</button>
      </form>
    </div>
  );
};

export default JobSeekerRegister;
