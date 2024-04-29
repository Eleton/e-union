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

const PartyStat = ({ value, party }: { value: number; party: Party }) => (
  <div>
    <div className="relative h-4">
      <div
        className="absolute bottom-0 left-0 top-0"
        style={{
          width: `${value / 2 || 2}%`,
          backgroundColor: partyColors[party],
        }}
      />
      <div
        className="absolute h-4 w-1/2 opacity-15"
        style={{ backgroundColor: partyColors[party] }}
      />
      <div className="absolute h-4 w-1/2 border border-black/50" />
      <div className="absolute left-1/2 -translate-y-[2px] pl-2 text-sm">
        {party} - {value}%
      </div>
    </div>
  </div>
);

export default function Result() {
  const { result: candidates, resetResult } = useLocalState();

  return (
    <section className="flex h-full flex-col justify-between">
      <div className="flex h-full flex-col">
        <div className="flex flex-col gap-4 px-4">
          <PartyStat value={getPartyScore(candidates, "S")} party="S" />
          <PartyStat value={getPartyScore(candidates, "M")} party="M" />
          <PartyStat value={getPartyScore(candidates, "SD")} party="SD" />
          <PartyStat value={getPartyScore(candidates, "MP")} party="MP" />
          <PartyStat value={getPartyScore(candidates, "C")} party="C" />
          <PartyStat value={getPartyScore(candidates, "KD")} party="KD" />
          <PartyStat value={getPartyScore(candidates, "V")} party="V" />
          <PartyStat value={getPartyScore(candidates, "L")} party="L" />
        </div>
      </div>
      <div>
        <div className="flex justify-center p-4">
          <Link
            className="rounded bg-eu-blue-2 px-4 py-3 font-semibold text-white hover:bg-eu-blue-3"
            href="/start"
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
