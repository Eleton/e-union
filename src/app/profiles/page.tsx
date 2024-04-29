"use client";

import Link from "next/link";
import ProfileCard from "@/components/ProfileCard";
import useLocalState from "@/hooks/useLocalState";

export default function Profile() {
  const { result: candidates, handleSwipe } = useLocalState();
  const unswipedCandidates = candidates.filter((c) => c.swiped === "NONE");

  return (
    <div className="flex h-full flex-col">
      <div className="relative grow overflow-hidden">
        <div className="flex h-full flex-col items-center justify-center gap-4">
          <p className="px-8 text-center">
            Bra jobbat! Du har svept dig igenom alla kandidater!
          </p>
          <Link
            className="rounded bg-eu-blue-2 px-4 py-3 font-semibold text-white hover:bg-eu-blue-3"
            href="/result"
          >
            RESULTAT
          </Link>
        </div>
        {unswipedCandidates.map((candidate) => (
          <ProfileCard
            key={candidate.id}
            candidate={candidate}
            onSwipe={handleSwipe(candidate.id)}
          />
        ))}
      </div>
    </div>
  );
}
