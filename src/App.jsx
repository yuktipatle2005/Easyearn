import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import JobProviderRegister from "./pages/JobProviderRegister";
import JobProviderDetails from "./pages/JobProviderDetails";
import JobPostForm from "./pages/JobPostForm";
import JobSeekerRegister from "./pages/JobSeekerRegister";
import JobSeekerPreferences from "./pages/JobSeekerPreferences";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/job-provider" element={<JobProviderRegister />} />
        <Route path="/job-provider/details" element={<JobProviderDetails />} />
        <Route path="/job-provider/post-job" element={<JobPostForm />} />
        <Route path="/job-seeker" element={<JobSeekerRegister />} />
        <Route path="/job-seeker/preferences" element={<JobSeekerPreferences />} />
      </Routes>
    </Router>
  );
};

export default App;
