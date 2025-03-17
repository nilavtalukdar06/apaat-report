"use client";

import ReportFrom from "./ReportFrom";
import { useState } from "react";

export default function ReportWizard() {
  const [step, setStep] = useState(1);
  const [reportData, setReportData] = useState<any>(null);

  const handleComplete = (data: any) => {
    setReportData({ ...reportData, ...data });

    if (step === 3) {
      return;
    } else {
      setStep((prev) => prev + 1);
    }
  };

  return (
    <section className="rounded-xl bg-zinc-900 p-8">
      {step === 1 && <ReportFrom />}
    </section>
  );
}
