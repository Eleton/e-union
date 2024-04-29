import { useState, useEffect } from "react";
import candidates from "@/candidates";
import { Candidate, Direction } from "@/types";

const scrambleCandidates = () => {
  return candidates
    .map((d) => ({ d, ran: Math.random() }))
    .toSorted((a, b) => a.ran - b.ran)
    .map(({ d }) => d);
};

const useLocalState = () => {
  const [result, setResult] = useState<Candidate[]>([]);
  // const [superLikes, setSuperLikes] = useState(0);

  useEffect(() => {
    const storedResult = localStorage.getItem("result");
    if (!storedResult) {
      const candidates = scrambleCandidates();
      setResult(candidates);
      localStorage.setItem("result", JSON.stringify(candidates));
    } else {
      setResult(JSON.parse(storedResult));
    }
  }, []);

  const handleSwipe = (id: string) => (direction: Direction) => {
    const newResult = result.map((c) =>
      c.id === id ? { ...c, swiped: direction } : c,
    );
    localStorage.setItem("result", JSON.stringify(newResult));
    setResult(newResult);
  };

  const resetResult = () => {
    localStorage.removeItem("result");
  };

  return {
    result,
    handleSwipe,
    resetResult,
  };
};

export default useLocalState;
