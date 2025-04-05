import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/JobProviderRegistration.css";

const JobProviderRegistration = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    location: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Registration Successful!");
    navigate("/job-provider/details");
    
  };

  return (
    <div className="job-provider-container">
      <div className="registration-box">
        <h2 className="registration-title">Job Provider Registration</h2>
        <form onSubmit={handleSubmit} className="registration-form">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="registration-input"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="registration-input"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="registration-input"
            required
          />
          <input
            type="text"
            name="company"
            placeholder="Company Name"
            value={formData.company}
            onChange={handleChange}
            className="registration-input"
            required
          />
          <input
            type="text"
            name="location"
            placeholder="Location (City, Area, Pincode)"
            value={formData.location}
            onChange={handleChange}
            className="registration-input"
            required
          />
          <button type="submit" className="registration-button">Register</button>
        </form>
      </div>
    </div>
  );
};

export default JobProviderRegistration;
