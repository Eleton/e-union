import Image from "next/image";
import { useState } from "react";
import { Candidate, Direction } from "@/types";
import bios from "@/bios";

const DELAY = 250;

const ProfileCard = ({
  candidate,
  onSwipe,
}: {
  candidate: Candidate;
  onSwipe: (direction: Direction) => void;
}) => {
  const [moving, setMoving] = useState(false);
  const [startPosition, setStartPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [direction, setDirection] = useState<Direction>("NONE");
  const [open, setOpen] = useState(false);

  return (
    <article
      className="absolute inset-0 h-full"
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: !moving ? `transform ${DELAY}ms ease-out` : "",
      }}
      onTouchStart={(e) => {
        setMoving(true);
        setPosition({ x: 0, y: 0 });
        setStartPosition({ x: e.touches[0].screenX, y: e.touches[0].screenY });
      }}
      onTouchMove={(e) => {
        const { width, height } = (
          e.target as HTMLDivElement
        ).getBoundingClientRect();
        if (moving) {
          setPosition({
            x: e.touches[0].screenX - startPosition.x,
            y: e.touches[0].screenY - startPosition.y,
          });
          if (position.y < -height / 4) {
            setDirection("UP");
          } else if (position.x > width / 4) {
            setDirection("RIGHT");
          } else if (position.x < -width / 4) {
            setDirection("LEFT");
          } else {
            setDirection("NONE");
          }
        }
      }}
      onTouchEnd={(e) => {
        const { width, height } = (
          e.target as HTMLDivElement
        ).getBoundingClientRect();
        setMoving(false);
        switch (direction) {
          case "LEFT": {
            setPosition({ x: -2 * width, y: 0 });
            setStartPosition({ x: -2 * width, y: 0 });
            setTimeout(() => onSwipe("LEFT"), DELAY);
            break;
          }
          case "RIGHT": {
            setPosition({ x: 2 * width, y: 0 });
            setStartPosition({ x: 2 * width, y: 0 });
            setTimeout(() => onSwipe("RIGHT"), DELAY);
            break;
          }
          case "UP": {
            setPosition({ x: 0, y: -2 * height });
            setStartPosition({ x: 0, y: -2 * height });
            setTimeout(() => onSwipe("UP"), DELAY);
            break;
          }
          case "NONE": {
            setPosition({ x: 0, y: 0 });
            setStartPosition({ x: 0, y: 0 });
          }
        }
        setMoving(false);
      }}
      // onMouseDown={(e) => {
      //   e.preventDefault();
      //   setMoving(true);
      //   setPosition({ x: 0, y: 0 });
      //   setStartPosition({ x: e.screenX, y: e.screenY });
      // }}
      // onMouseMove={(e) => {
      //   if (moving) {
      //     setPosition({
      //       x: e.screenX - startPosition.x,
      //       y: e.screenY - startPosition.y,
      //     });
      //   }
      // }}
      // onMouseUp={() => {
      //   setMoving(false);
      // }}
    >
      <Image
        className="object-cover"
        src={`/${candidate.id}-1.jpeg`}
        alt=""
        fill
      />
      <div className="absolute inset-0 flex flex-col justify-end text-white">
        {open ? (
          <div className="absolute inset-0 flex flex-col justify-end gap-6 bg-black/70 p-4 pb-0">
            <div className="flex flex-col gap-2">
              {bios.hasOwnProperty(candidate.id)
                ? bios[candidate.id]
                : candidate.description}
            </div>
            <div className="flex bg-gradient-to-t from-black pb-4">
              <div>
                <p className="text-xl">
                  <strong>{candidate.name}</strong> {candidate.age}
                </p>
                <p>{candidate.district}</p>
                <p>{candidate.occupation}</p>
              </div>
              <div className="flex grow items-end justify-end">
                <button
                  className="flex h-8 w-8 items-center justify-center rounded-full border-2 leading-none"
                  onClick={() => setOpen(false)}
                >
                  <span>V</span>
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex bg-gradient-to-t from-black p-4 pt-12">
            <div>
              <p className="text-xl">
                <strong>{candidate.name}</strong> {candidate.age}
              </p>
              <p>{candidate.district}</p>
              <p>{candidate.occupation}</p>
            </div>
            <div className="flex grow items-end justify-end">
              <button
                className="flex h-8 w-8 items-center justify-center rounded-full border-2 leading-none"
                onClick={() => setOpen(true)}
              >
                <span className="rotate-180">V</span>
              </button>
            </div>
          </div>
        )}
        {direction === "UP" && (
          <div className="absolute inset-0 bg-sky-700/50"></div>
        )}
        {direction === "RIGHT" && (
          <div className="absolute inset-0 bg-green-700/50"></div>
        )}
        {direction === "LEFT" && (
          <div className="absolute inset-0 bg-red-700/50"></div>
        )}
      </div>
    </article>
  );
};

export default ProfileCard;
