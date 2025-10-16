import React from "react";
import { Link } from "react-router";

export default function Error() {
  return (
    <main className="min-h-screen bg-[#0e1a2b] text-slate-200 flex items-center justify-center px-4 ">
      <div className="max-w-3xl w-full flex flex-col md:flex-row items-center gap-10 md:gap-14">
        <div className="relative w-full md:w-[420px] aspect-[4/3]">
          <div className="absolute inset-0 rounded-2xl">
            <div className="absolute -top-2 left-2 h-5 w-24 bg-white/10 rounded-full blur-[1px]" />
            <div className="absolute top-6 right-6 h-5 w-28 bg-white/10 rounded-full blur-[1px]" />
        
            <div className="absolute inset-0">
              {Array.from({ length: 24 }).map((_, i) => (
                <span
                  key={i}
                  className="absolute w-1 h-1 bg-white/60 rounded-full"
                  style={{
                    top: `${Math.random() * 90}%`,
                    left: `${Math.random() * 90}%`,
                    opacity: 0.4 + Math.random() * 0.6,
                  }}
                />
              ))}
            </div>

            <svg
              viewBox="0 0 420 300"
              className="absolute inset-0 w-full h-full drop-shadow-[0_8px_30px_rgba(0,0,0,0.4)]"
            >
            
              <ellipse cx="210" cy="230" rx="140" ry="70" fill="#0f2a45" />
              <ellipse cx="210" cy="230" rx="138" ry="66" fill="#172f51" />
              <ellipse cx="250" cy="240" rx="18" ry="10" fill="#0e2741" />
              <ellipse cx="175" cy="220" rx="12" ry="7" fill="#0e2741" />
              <ellipse cx="205" cy="255" rx="10" ry="6" fill="#0e2741" />

           
              <g transform="translate(200 150)">
                <path
                  d="M20 0c12 18 18 36 18 56 0 20-8 30-18 30s-18-10-18-30C2 36 8 18 20 0Z"
                  fill="#e5f0ff"
                />
                <circle cx="20" cy="38" r="8" fill="#9cc2ff" />
                <path d="M0 66l-18 14 6-22 12-6z" fill="#9cc2ff" />
                <path d="M40 66l18 14-6-22-12-6z" fill="#9cc2ff" />
                <path
                  d="M20 86c-10 14-8 22 0 30 8-8 10-16 0-30Z"
                  fill="#ffb44d"
                />
              </g>

              <g transform="translate(145 205) rotate(-18)">
                <circle cx="0" cy="0" r="6" fill="#9cc2ff" />
                <rect x="-2" y="6" width="4" height="14" rx="2" fill="#e5f0ff" />
                <rect x="-10" y="9" width="8" height="4" rx="2" fill="#e5f0ff" />
                <rect x="2" y="9" width="8" height="4" rx="2" fill="#e5f0ff" />
                <rect x="-7" y="20" width="6" height="4" rx="2" fill="#e5f0ff" />
                <rect x="1" y="20" width="6" height="4" rx="2" fill="#e5f0ff" />
              </g>
            </svg>
          </div>
        </div>

        <div className="text-center md:text-left">
          <div className="text-6xl md:text-7xl font-semibold tracking-tight text-slate-100">
            404
          </div>
          <h1 className="mt-3 text-2xl font-medium text-slate-200">Vaxseyy…</h1>
          <p className="mt-3 text-slate-400 max-w-md">
            Biz kosmosda itmişik. Baxmağa çalışdığınız səhifə mövcud deyil.
          </p>

          <Link to="/" className="inline-flex items-center mt-6 px-5 py-3 rounded-xl bg-transparent ring-1 ring-slate-500/50 hover:ring-slate-300 hover:bg-white/5 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0e1a2b] focus-visible:ring-slate-300"  >
            ƏSAS SƏHİFƏYƏ GETMƏK
          </Link>
        </div>
      </div>
    </main>
  );
}
