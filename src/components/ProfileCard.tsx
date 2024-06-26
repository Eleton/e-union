import Image from "next/image";
import { useState } from "react";
import { Candidate, Direction } from "@/types";
import bios from "@/bios";

const DELAY = 250;

const ProfileCard = ({
  candidate,
  onSwipe,
  onLoad,
  priority = false,
}: {
  candidate: Candidate;
  onSwipe: (direction: Direction) => void;
  onLoad: () => void;
  priority?: boolean;
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
      onMouseDown={(e) => {
        setMoving(true);
        setPosition({ x: 0, y: 0 });
        setStartPosition({ x: e.screenX, y: e.screenY });
      }}
      onMouseMove={(e) => {
        const { width, height } = (
          e.target as HTMLDivElement
        ).getBoundingClientRect();
        if (moving) {
          setPosition({
            x: e.screenX - startPosition.x,
            y: e.screenY - startPosition.y,
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
      onMouseUp={(e) => {
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
    >
      <Image
        className="object-cover"
        src={`/${candidate.id}-1.jpeg`}
        alt=""
        fill
        onLoad={onLoad}
        priority={priority}
      />
      <div className="absolute inset-0 flex flex-col justify-end text-white">
        {open ? (
          <div className="absolute inset-0 flex flex-col justify-end bg-black/70">
            <div className="flex flex-col gap-2 p-4">
              {bios.hasOwnProperty(candidate.id)
                ? bios[candidate.id]
                : candidate.description}
            </div>
            <div className="flex bg-gradient-to-t from-black p-4">
              <div>
                <p className="text-xl">
                  <strong>{candidate.name}</strong> {candidate.age}
                </p>
                <p>{candidate.district}</p>
                <p>{candidate.occupation}</p>
              </div>
              <div className="flex grow justify-end">
                <button
                  className="flex h-12 w-12 items-center justify-center rounded-full border-4 leading-none"
                  onClick={() => setOpen(false)}
                >
                  <span className="rotate-90 text-white">
                    <Image
                      src="/right-arrow.svg"
                      alt={""}
                      width="20"
                      height="20"
                    />
                  </span>
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
            <div className="flex grow justify-end">
              <button
                className="flex h-12 w-12 items-center justify-center rounded-full border-4 leading-none"
                onClick={() => setOpen(true)}
              >
                <span className="-rotate-90 text-white">
                  <Image
                    src="/right-arrow.svg"
                    alt={""}
                    width="20"
                    height="20"
                  />
                </span>
              </button>
            </div>
          </div>
        )}
        {direction === "UP" && (
          <div className="absolute inset-0 flex select-none items-center justify-center bg-sky-700/50 text-6xl font-bold text-white">
            WOW!
          </div>
        )}
        {direction === "RIGHT" && (
          <div className="absolute inset-0 flex select-none items-center justify-center bg-green-700/50 text-6xl font-bold text-white">
            Yeah!
          </div>
        )}
        {direction === "LEFT" && (
          <div className="absolute inset-0 flex select-none items-center justify-center bg-red-700/50 text-6xl font-bold text-white">
            Meh...
          </div>
        )}
      </div>
    </article>
  );
};

export default ProfileCard;
