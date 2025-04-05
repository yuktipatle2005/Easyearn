import React, { useState } from "react";
import JobProviderRegister from "../pages/JobProviderRegister";
import JobProviderDetails from "../pages/JobProviderDetails";
import JobPostForm from "../pages/JobPostForm";

const JobProviderPage = () => {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    setStep(step + 1);
  };

  return (
    <div className="provider-container">
      {step === 1 && <JobProviderRegister onRegister={handleNext} />}
      {step === 2 && <JobProviderDetails onNext={handleNext} />}
      {step === 3 && <JobPostForm />}
    </div>
  );
};

export default JobProviderPage;
