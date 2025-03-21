import ReportTracker from "@/components/ReportTracker";

export default function TrackReport() {
  return (
    <section className="flex min-h-screen max-w-screen items-center justify-center relative overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
        <div className="w-full max-w-5xl relative z-20 text-white">
          <ReportTracker />
        </div>
      </div>

      {/* Background */}
      <div className="h-full w-full bg-black  bg-grid-white/[0.1]  absolute top-0 left-0 z-10 flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
    </section>
  );
}
