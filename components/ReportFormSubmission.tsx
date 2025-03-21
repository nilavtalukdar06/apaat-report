"use client";
import Link from "next/link";
import { Copy } from "lucide-react";
import { useState } from "react";

interface ReportSubmittedProps {
  data: any;
  onComplete: (data: any) => void;
}

const ReportFormSubmission = ({ data }: ReportSubmittedProps) => {
  const reportId = data.reportId || "Error-id-not-found";
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(reportId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="text-center space-y-6">
      <div className="flex flex-col items-center">
        <div className="bg-green-500/10 rounded-full p-3">
          <svg
            className="w-16 h-16 text-green-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        <h3 className="mt-4 text-xl font-medium text-white">
          Report Successfully Submitted
        </h3>
        <p className="mt-2 text-sm text-zinc-400">
          Your report has been securely transmitted to law enforcement
        </p>
      </div>

      <div className="bg-zinc-800/50 rounded-lg p-6 max-w-md mx-auto">
        <h4 className="text-white font-medium mb-2">Your Report ID</h4>
        <div className="bg-zinc-900 rounded p-3 flex items-center justify-between gap-2">
          <code className="text-sky-400">{reportId}</code>
          <span className="flex items-center gap-2">
            <button onClick={handleCopy} title="Copy Report ID">
              <Copy className="h-5 w-5 text-sky-400 cursor-pointer hover:text-white" />
            </button>
            {copied && <span className="text-xs text-green-500">Copied!</span>}
          </span>
        </div>
        <p className="mt-2 text-sm text-zinc-400">
          Save this ID to check your report status or communicate securely with
          law enforcement
        </p>
      </div>

      <div className="pt-4">
        <Link href="/">
          <button className="inline-flex items-center justify-center rounded-lg bg-sky-500 px-4 py-2 text-sm font-medium text-white hover:bg-sky-400">
            Return to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ReportFormSubmission;
