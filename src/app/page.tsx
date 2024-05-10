"use client";

import useLocalState from "@/hooks/useLocalState";
import Link from "next/link";

export default function Start() {
  const { result } = useLocalState();
  // const href =
  //   result.filter(({ swiped }) => swiped === "NONE").length !== 0
  //     ? `/${result.at(-1)?.id}`
  //     : "/end";
  return (
    <div className="flex h-full grow flex-col gap-4 px-4 py-8 text-eu-black">
      <div>
        <h1 className="text-center text-2xl font-bold">Aimans Valkompass</h1>
        <h2 className="text-center text-xl italic">EU-Valet 2024 Edition</h2>
      </div>

      <p className="grow">
        Det är EU-val snart och du behöver ta reda på vem du ska rösta på.
        You&apos;re welcome.
      </p>
      <div className="flex justify-center">
        <Link
          className="rounded bg-eu-blue-2 px-4 py-3 font-semibold text-white hover:bg-eu-blue-3"
          href="/profiles"
        >
          STARTA
        </Link>
      </div>
    </div>
  );
}
