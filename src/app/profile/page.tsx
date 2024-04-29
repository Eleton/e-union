"use client";

import { useParams, redirect } from "next/navigation";
import candidates from "@/candidates";
import { Candidate } from "@/types";
import { useEffect, useState } from "react";
import ProfileCard from "@/components/ProfileCard";
import useLocalState from "@/hooks/useLocalState";

export default function Profile() {
  const params = useParams();
  const { profile } = params;
  const { result: candidates, handleSwipe } = useLocalState();
  // const candidate = candidates.find(({ id }) => id === params.profile);
  // if (!candidate) return;
  const unswipedCandidates = candidates.filter((c) => c.swiped === "NONE");
  const lastCandidate = unswipedCandidates.at(-1);
  // console.log(lastCandidate);
  // useEffect(() => {
  //   // console.log(
  //   //   `${lastCandidate} && ${candidates.length > 0} && ${profile} !== ${lastCandidate?.id}`,
  //   // );
  //   if (
  //     lastCandidate &&
  //     candidates.length > 0 &&
  //     profile !== lastCandidate?.id
  //   ) {
  //     // redirect(`/${lastCandidate?.id}`);
  //   }
  // }, [profile, candidates.length, lastCandidate]);
  return (
    <div className="flex h-full flex-col">
      <div className="relative grow overflow-hidden">
        {unswipedCandidates.map((candidate) => (
          <ProfileCard
            key={candidate.id}
            candidate={candidate}
            onSwipe={handleSwipe(candidate.id)}
          />
        ))}
      </div>
      {/* <div className="text-black">3</div> */}
    </div>
  );
}
