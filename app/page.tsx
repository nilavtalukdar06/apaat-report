import Link from "next/link";
import { features, stats } from "@/constants/index";

export default function Home() {
  return (
    <section className="relative px-6 pt-32">
      <div className="mx-auto max-w-5xl">
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
            Secure & Anonymous Reporting
          </div>

          <h1 className="mt-8 bg-gradient-to-b from-white to-white/80 bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-7xl">
            Report Incident
            <span className="block bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
              Protect Identity
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base mx-auto leading-normal sm:leading-relaxed text-zinc-400">
            Make your community safer without compromising your safety. Our
            advanced encryption ensures your identity remains completely
            anonymous.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 ">
            <Link href={"/submit-report"}>
              <button className="group relative flex h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-400 to-blue-500 px-8 text-sm font-medium text-white">
                Make Anonymous Report
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 12h14M12 5l7 7-7 7"
                  />
                </svg>
              </button>
            </Link>
            <Link href={"/how-it-works"}>
              <button className="flex h-12 items-center justify-center gap-2 rounded-xl bg-white/5 px-8 text-sm font-medium text-white ring-1 w-full ring-inset ring-white/10 transition-all hover:bg-white/10">
                How it Works
              </button>
            </Link>
          </div>
        </div>

        <div className="mt-40 grid gap-6 md:grid-cols-2 lg:grid-cols-3 place-items-center">
          {features.map((item, index) => (
            <div
              key={index}
              className="w-full group relative overflow-hidden rounded-xl bg-zinc-900 p-8 transition-all hover:bg-zinc-800/80"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-sky-500/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

              <div className="relative">
                <div className="mb-5 inline-flex rounded-xl bg-sky-500/10 p-3">
                  {item.icon}
                </div>
                <h3 className="mb-3 text-lg font-medium text-white">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-400">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-40 bg-zinc-900 rounded-xl p-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 place-items-center">
            {stats.map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-white">
                  {item.value}
                </div>
                <div className="mt-1 text-sm text-zinc-400">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="pt-40 py-20 justify-center flex">
          <div className="inline-flex items-center gap-3 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-5 py-2 text-sm text-zinc-400 animate-pulse">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            <p className="text-emerald-500">
              Trusted by Law Enforcement Nationwide
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
