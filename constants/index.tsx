import React from "react";

interface Feature {
  title: String;
  description: String;
  icon: JSX.Element;
}

interface Stats {
  value: String;
  label: String;
}

export const features: Feature[] = [
  {
    title: "Military-Grade Encryption",
    description: "Your identity is protected with best encryption protocols",
    icon: (
      <svg
        className="h-6 w-6 text-sky-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
        />
      </svg>
    ),
  },
  {
    title: "Real-time Processing",
    description: "Instant verification and secure routing of all reports",
    icon: (
      <svg
        className="h-6 w-6 text-sky-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    title: "Secure Communication",
    description: "Two-way anonymous channel with law enforcement",
    icon: (
      <svg
        className="h-6 w-6 text-sky-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        />
      </svg>
    ),
  },
];

export const stats: Stats[] = [
  { value: "100K+", label: "Reports Filed" },
  { value: "100%", label: "Anonymity Rate" },
  { value: "24/7", label: "Support Available" },
];
