"use client";

import useLocalState from "@/hooks/useLocalState";
import { Candidate, Party } from "@/types";
import partyColors from "@/partyColors";
import Link from "next/link";

const getPartyScore = (candidates: Candidate[], party: Party) => {
  const partyCandidates = candidates.filter((p) => p.party === party);
  return partyCandidates.reduce((acc, next) => {
    switch (next.swiped) {
      case "LEFT":
        return acc;
      case "RIGHT":
        return acc + 50;
      case "UP":
        return acc + 100;
      case "NONE": {
        console.warn("Premature calculation");
        return acc;
      }
    }
  }, 0);
};

const PartyBar = ({ value, party }: { value: number; party: Party }) => {
  if (value >= 200) {
    return (
      <div
        className="absolute -bottom-1 -top-1 left-0 animate-[pulse_500ms_ease-in-out_infinite]"
        style={{
          width: `${value / 2 || 2}%`,
          background: partyColors[party],
        }}
      />
    );
  }
  return (
    <div
      className="absolute bottom-0 left-0 top-0"
      style={{
        width: `${value / 2 || 2}%`,
        background: partyColors[party],
      }}
    />
  );
};

const PartyStat = ({ value, party }: { value: number; party: Party }) => (
  <div className="text-sm font-bold text-black">
    {party} - {value}%
    <div className="relative h-4">
      <PartyBar value={value} party={party} />
      <div
        className="absolute bottom-0 left-0 top-0"
        style={{
          width: `${value / 2 || 2}%`,
          background: partyColors[party],
        }}
      />
      <div
        className="absolute h-4 w-1/2 opacity-15"
        style={{ background: partyColors[party] }}
      />
      <div className="absolute h-4 w-1/2 border border-black/30" />
    </div>
  </div>
);

export default function Result() {
  const { result: candidates, resetResult } = useLocalState();

  return (
    <section className="flex h-full flex-col justify-between">
      <div className="flex flex-col">
        <div className="flex flex-col gap-2 px-4">
          <PartyStat value={getPartyScore(candidates, "S")} party="S" />
          <PartyStat value={getPartyScore(candidates, "M")} party="M" />
          <PartyStat value={getPartyScore(candidates, "SD")} party="SD" />
          <PartyStat value={getPartyScore(candidates, "MP")} party="MP" />
          <PartyStat value={getPartyScore(candidates, "C")} party="C" />
          <PartyStat value={getPartyScore(candidates, "KD")} party="KD" />
          <PartyStat value={getPartyScore(candidates, "V")} party="V" />
          <PartyStat value={getPartyScore(candidates, "L")} party="L" />
          <PartyStat value={getPartyScore(candidates, "FL")} party="FL" />
        </div>
      </div>
      <div className="p-4 text-center text-black">
        Bra resultat! Nu är du redo att ta dig an{" "}
        <a
          className="font-semibold text-eu-blue-2 underline"
          href="https://elections.europa.eu/sv/"
        >
          EU-valet den 9:e juni
        </a>
        !
      </div>
      <div>
        <div className="flex justify-center p-4">
          <Link
            className="rounded bg-eu-blue-2 px-4 py-3 font-semibold text-white hover:bg-eu-blue-3"
            href="/"
            onClick={() => {
              resetResult();
            }}
          >
            BÖRJA OM
          </Link>
        </div>
      </div>
    </section>
  );
}
