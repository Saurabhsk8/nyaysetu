import type { ReactNode } from "react";

function GoaCrest(): ReactNode {
  return (
    <div className="flex flex-col items-center gap-2" aria-label="Goa government crest placeholder">
      <svg
        width="96"
        height="96"
        viewBox="0 0 96 96"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-foreground"
        aria-hidden="true"
      >
        <circle cx="48" cy="48" r="44" stroke="currentColor" strokeWidth="2" />
        <circle cx="48" cy="48" r="36" stroke="currentColor" strokeWidth="1" strokeDasharray="4 3" />
        <path
          d="M48 20 L52 36 L68 36 L55 46 L60 62 L48 52 L36 62 L41 46 L28 36 L44 36 Z"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
        />
        <text
          x="48"
          y="80"
          textAnchor="middle"
          fontSize="8"
          fontFamily="inherit"
          letterSpacing="2"
          fill="currentColor"
        >
          GOA
        </text>
      </svg>
      <span className="text-xs text-muted-foreground tracking-widest uppercase">
        Government of Goa
      </span>
    </div>
  );
}

export default function HomePage(): ReactNode {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 p-8">
      <GoaCrest />
      <div className="text-center space-y-3">
        <h1 className="text-4xl font-semibold tracking-tight">NyaySetu</h1>
        <p className="text-lg text-muted-foreground">न्यायसेतु — Bridge to Justice</p>
      </div>
      <div className="flex items-center gap-2 rounded-full border border-border bg-muted/40 px-4 py-1.5">
        <span className="size-2 rounded-full bg-emerald-500" aria-hidden="true" />
        <span className="text-sm font-medium text-muted-foreground">System Online</span>
      </div>
    </main>
  );
}
