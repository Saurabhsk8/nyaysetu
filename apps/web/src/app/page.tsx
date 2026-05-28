import type { ReactNode } from "react";

export default function HomePage(): ReactNode {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">NyaySetu</h1>
      <p className="mt-4 text-lg text-gray-600">न्यायसेतु — Bridge to Justice</p>
    </main>
  );
}
