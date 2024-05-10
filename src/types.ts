import { ReactNode } from "react";

export type Party =
  | "S"
  | "M"
  | "SD"
  | "MP"
  | "C"
  | "KD"
  | "KD"
  | "V"
  | "L"
  | "FL"
  | "PP"
  | "MED";

export type Direction = "NONE" | "RIGHT" | "LEFT" | "UP";

export type Candidate = {
  id: string;
  name: string;
  district: string;
  party: Party;
  age: number;
  occupation: string;
  description: ReactNode;
  swiped: Direction;
};
