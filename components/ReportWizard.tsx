"use client";

import ReportForm from "./ReportForm";
import { useState } from "react";
import ReportFormSubmission from "./ReportFormSubmission";

export default function ReportWizard() {
  const [step, setStep] = useState(1);
  const [reportData, setReportData] = useState<any>(null);

  const handleComplete = async (data: any) => {
    setReportData({ ...reportData, ...data });

    if (step === 3) {
      return;
    } else {
      setStep((prev) => prev + 1);
    }
  };

  return (
    <section className="rounded-xl bg-zinc-900 p-4 sm:p-8">
      {step === 1 && <ReportForm onComplete={handleComplete} />}
      {step === 2 && (
        <ReportFormSubmission data={reportData} onComplete={handleComplete} />
      )}
    </section>
  );
}
