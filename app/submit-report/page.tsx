import ReportWizard from "@/components/ReportWizard";

export default function SubmitReport() {
  return (
    <main className="relative min-h-screen max-w-screen selection:bg-sky-500/20 overflow-x-hidden">
      <div className="relative px-6 pt-32 z-20">
        <div className="mx-auto max-w-3xl">
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex h-9 items-center gap-2 rounded-full border border-sky-500/20 bg-sky-500/10 px-4 text-sm text-sky-400 animate-pulse">
              <svg
                className="h-4 w-4"
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
              Secure & Anonymous
            </div>

            <h1 className="mt-8 bg-gradient-to-b from-white to-white/80 bg-clip-text text-4xl sm:text-5xl font-bold tracking-tight text-transparent">
              Submit Anonymous Report
            </h1>

            <p className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-zinc-400">
              Your safety is our priority. All submissions are encrypted and
              anonymized.
            </p>
          </div>

          <div className="my-16 bg-zinc-900/50 rounded-xl border border-white/5 p-2 sm:p-4">
            <ReportWizard />
          </div>
        </div>
      </div>

      {/* Background */}
      <div className="h-full w-full bg-black  bg-grid-white/[0.1]  absolute top-0 left-0 z-10 flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
    </main>
  );
}
