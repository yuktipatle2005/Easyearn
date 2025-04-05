import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/JobForms.css";

const JobSeekerPreferences = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    jobType: "",
    workHours: "",
    skills: "",
    experience: "",
    salary: "",
    languages: "",
    healthConditions: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/job-seeker/dashboard");
  };

  return (
    <div className="form-container">
      <h2>Job Preferences</h2>
      <form onSubmit={handleSubmit}>
        <label>Job Type</label>
        <select name="jobType" onChange={handleChange} required>
          <option value="">Select</option>
          <option value="Housekeeping">Housekeeping</option>
          <option value="Delivery">Delivery</option>
          <option value="Construction">Construction</option>
          <option value="Retail">Retail</option>
          <option value="Driving">Driving</option>
          <option value="Other">Other</option>
        </select>

        <label>Preferred Work Hours</label>
        <select name="workHours" onChange={handleChange} required>
          <option value="">Select</option>
          <option value="Full-time">Full-time</option>
          <option value="Part-time">Part-time</option>
          <option value="Day shift">Day Shift</option>
          <option value="Night shift">Night Shift</option>
        </select>

        <input type="text" name="skills" placeholder="Skills & Experience" onChange={handleChange} required />
        <input type="text" name="salary" placeholder="Expected Salary" onChange={handleChange} required />
        <input type="text" name="languages" placeholder="Languages Spoken" onChange={handleChange} required />
        <textarea name="healthConditions" placeholder="Health Conditions (if any)" onChange={handleChange}></textarea>

        <button type="submit">Save Preferences</button>
      </form>
    </div>
  );
};

export default JobSeekerPreferences;
