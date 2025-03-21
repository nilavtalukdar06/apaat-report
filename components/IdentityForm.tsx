"use client";

import { useForm } from "react-hook-form";

export default function ReportForm() {
  const { register } = useForm();

  return (
    <div className="w-full max-w-xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
          Reveal Your Identity (Optional)
        </h1>
        <div className="mt-2 h-1 w-20 bg-gradient-to-r from-sky-400 to-blue-600 mx-auto rounded-full"></div>
      </div>

      <form
        className="bg-neutral-900/50 backdrop-blur-sm py-8 px-4 shadow-xl border border-neutral-800 rounded-xl sm:px-10 text-zinc-400 relative overflow-hidden"
        action="https://api.web3forms.com/submit"
        method="POST"
      >
        <input
          type="hidden"
          name="access_key"
          value={process.env.NEXT_PUBLIC_REPORT_FORM || ""}
        />
        {/* Background decorative elements */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-sky-500/10 rounded-full blur-3xl"></div>

        <div className="space-y-6 relative">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium mb-2 text-zinc-300"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              {...register("name")}
              className="appearance-none block w-full px-3 py-2 border border-neutral-800 rounded-lg bg-neutral-900 placeholder-neutral-500 text-neutral-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/20"
              placeholder="Enter your name"
              name="Name"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium mb-2 text-zinc-300"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              {...register("email")}
              className="appearance-none block w-full px-3 py-2 border border-neutral-800 rounded-lg bg-neutral-900 placeholder-neutral-500 text-neutral-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/20"
              placeholder="Enter your email"
              name="Email"
            />
          </div>

          <div>
            <label
              htmlFor="reportId"
              className="block text-sm font-medium mb-2 text-zinc-300"
            >
              Report ID
            </label>
            <input
              id="reportId"
              type="text"
              {...register("reportId")}
              className="appearance-none block w-full px-3 py-2 border border-neutral-800 rounded-lg bg-neutral-900 placeholder-neutral-500 text-neutral-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/20"
              placeholder="Enter report ID"
              name="Report Id"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium mb-2 text-zinc-300"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              {...register("message")}
              className="appearance-none block w-full px-3 py-2 border border-neutral-800 rounded-lg bg-neutral-900 placeholder-neutral-500 text-neutral-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/20"
              placeholder="Enter your message"
              name="Message"
            />
          </div>

          <button
            type="submit"
            className="w-full relative group overflow-hidden rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 
                   px-4 py-3.5 text-sm font-medium text-white shadow-lg
                   transition-all duration-200 hover:from-sky-400 hover:to-blue-500
                   disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span className="relative z-10">Submit Report</span>
            <div className="absolute inset-0 h-full w-full scale-0 rounded-lg transition-all duration-300 group-hover:scale-100 group-hover:bg-white/10"></div>
          </button>
        </div>
      </form>
    </div>
  );
}
