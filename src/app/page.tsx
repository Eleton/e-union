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
      <div className="flex flex-col gap-2">
        <h1 className="text-center text-4xl font-bold">Aimans Valkompass</h1>
        <h2 className="text-center text-xl italic">EU-Valet 2024 Edition</h2>
      </div>

      <div className="flex grow flex-col gap-2 text-center">
        <p>Den 9:e juni är det val till EU-parlamentet!</p>
        <p>
          Vet du inte vad du ska rösta på? Ingen fara,{" "}
          <em>dom flesta har ingen aning!</em>
        </p>
        <p>
          Du har dock tur! Du står just nu inför möjligheten att göra{" "}
          <strong>Aimans EU-Valkompass</strong>! Detta kommer göra dig bättre
          förberedd än i stort sett alla dina vänner!
        </p>
        <p>
          Starta genom att trycka på &quot;<strong>STARTA</strong>&quot;
        </p>
      </div>
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
