"use client";
import { useRef } from "react";
import { cursorContext } from "./cursorContext";
import Cursor from ".";

const CursorProvider = ({ children }: { children: React.ReactNode }) => {
  const cursorUtilsRef = useRef(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  return (
    <cursorContext.Provider value={{ cursorUtilsRef, cursorRef }}>
      <Cursor />
      {children}
    </cursorContext.Provider>
  );
};
export default CursorProvider;
