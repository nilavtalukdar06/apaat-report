"use client";
import PaymentForm from "@/components/PaymentForm";

export default function DonateUs() {
  return (
    <section className="min-h-screen max-w-screen relative overflow-x-hidden p-4 sm:p-8">
      <section className="max-w-xl mx-auto my-8 sm:my-16 relative z-20">
        <PaymentForm />
      </section>

      {/* Background */}
      <div className="h-full w-full bg-black  bg-grid-white/[0.1]  absolute top-0 left-0 z-10 flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
    </section>
  );
}
