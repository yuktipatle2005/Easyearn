import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/JobPostForm.css";

const JobPostForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    jobTitle: "",
    jobCategory: "",
    openings: "",
    salaryRange: "",
    jobLocation: "",
    jobDescription: "",
    requiredSkills: "",
    requiredDocuments: "",
    startDate: "",
    accommodation: "",
    food: "",
    workTimings: "",
    contractDuration: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Job Posted:", formData);
    navigate("/job-provider/dashboard");
  };

  return (
    <div className="form-container">
      <h2>Post a Job</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="jobTitle" placeholder="Job Title" onChange={handleChange} required />
        <input type="text" name="jobCategory" placeholder="Job Category" onChange={handleChange} required />
        <input type="number" name="openings" placeholder="Number of Openings" onChange={handleChange} required />
        <input type="text" name="salaryRange" placeholder="Salary Range" onChange={handleChange} required />
        <input type="text" name="jobLocation" placeholder="Job Location" onChange={handleChange} required />
        <textarea name="jobDescription" placeholder="Job Description" onChange={handleChange} required></textarea>
        <input type="text" name="requiredSkills" placeholder="Required Skills / Experience" onChange={handleChange} required />
        <input type="text" name="requiredDocuments" placeholder="Required Documents" onChange={handleChange} required />
        <input type="date" name="startDate" placeholder="Available Start Date" onChange={handleChange} required />
        <select name="accommodation" onChange={handleChange} required>
          <option value="">Accommodation Provided?</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
        <select name="food" onChange={handleChange} required>
          <option value="">Food Provided?</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
        <input type="text" name="workTimings" placeholder="Work Timings" onChange={handleChange} required />
        <input type="text" name="contractDuration" placeholder="Contract Duration" onChange={handleChange} required />
        <button type="submit">Post Job</button>
      </form>
    </div>
  );
};

export default JobPostForm;
