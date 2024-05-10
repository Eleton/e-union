"use client";

import Link from "next/link";
import ProfileCard from "@/components/ProfileCard";
import useLocalState from "@/hooks/useLocalState";
import { useState } from "react";

export default function Profile() {
  const { result: candidates, handleSwipe } = useLocalState();
  const unswipedCandidates = candidates.filter((c) => c.swiped === "NONE");
  const [firstImageLoaded, setFirstImageLoaded] = useState(false);

  return (
    <div className="flex h-full flex-col">
      <div className="relative grow overflow-hidden">
        <div className="flex h-full flex-col items-center justify-center gap-4">
          {firstImageLoaded ? (
            <>
              <p className="px-8 text-center">
                Bra jobbat! Du har svept dig igenom alla kandidater!
              </p>
              <Link
                className="rounded bg-eu-blue-2 px-4 py-3 font-semibold text-white hover:bg-eu-blue-3"
                href="/result"
              >
                RESULTAT
              </Link>
            </>
          ) : (
            <p className="animate-ping text-black">Loading</p>
          )}
        </div>
        {firstImageLoaded
          ? unswipedCandidates.map((candidate, i) => (
              <ProfileCard
                key={candidate.id}
                candidate={candidate}
                onSwipe={handleSwipe(candidate.id)}
                onLoad={() => {}}
                priority={i === unswipedCandidates.length - 1}
              />
            ))
          : unswipedCandidates.length > 0 && (
              <ProfileCard
                candidate={unswipedCandidates[unswipedCandidates.length - 1]}
                onSwipe={handleSwipe(
                  unswipedCandidates[unswipedCandidates.length - 1].id,
                )}
                onLoad={() => setFirstImageLoaded(true)}
                priority
              />
            )}
      </div>
    </div>
  );
}
