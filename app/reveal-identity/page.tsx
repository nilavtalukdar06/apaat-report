import ReportForm from "@/components/IdentityForm";
import React from "react";

const page = () => {
  return (
    <section className="min-h-screen max-w-screen overflow-x-hidden relative p-4 sm:p-8">
      <div className="relative z-20 my-8 sm:my-16 mx-auto">
        <ReportForm />
      </div>

      {/* Background */}
      <div className="h-full w-full bg-black  bg-grid-white/[0.1]  absolute top-0 left-0 z-10 flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
    </section>
  );
};

export default page;
