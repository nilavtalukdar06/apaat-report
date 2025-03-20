export default function Loading() {
  return (
    <main className="min-h-screen flex items-center justify-center max-w-screen relative overflow-hidden">
      <div className="flex relative z-20 items-center space-x-3">
        <svg
          className="animate-spin h-5 w-5 text-sky-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
        <span className="text-sky-500 font-medium">Loading...</span>
      </div>

      <div className="h-full w-full bg-black  bg-grid-white/[0.1]  absolute top-0 left-0 z-10 flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
    </main>
  );
}
