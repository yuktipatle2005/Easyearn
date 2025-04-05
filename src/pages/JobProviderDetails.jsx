import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/JobProviderDetails.css";

const JobProviderDetails = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    businessType: "",
    location: "",
    govID: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/job-provider/post-job");
  };

  return (
    <div className="details-container">
      <div className="details-box">
        <h2 className="details-title">Personal / Company Details</h2>
        <form onSubmit={handleSubmit} className="details-form">
          <label className="form-label">Business Type</label>
          <input className="form-input" type="text" name="businessType" placeholder="Individual / Company" onChange={handleChange} required />

          <label className="form-label">Location</label>
          <input className="form-input" type="text" name="location" placeholder="City, Area" onChange={handleChange} required />

          <label className="form-label">Government ID</label>
          <input className="form-input" type="text" name="govID" placeholder="Aadhar / PAN / GST" onChange={handleChange} required />

          <div className="details-buttons">
            <button type="button" className="back-btn" onClick={() => navigate(-1)}>Back</button>
            <button type="submit" className="create-account-btn">Continue</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobProviderDetails;
