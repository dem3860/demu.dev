"use client";

import { RefObject } from "react";

type NavbarProps = {
  refs: {
    about: RefObject<HTMLElement | null>;
    strengths: RefObject<HTMLElement | null>;
    skills: RefObject<HTMLElement | null>;
    summary: RefObject<HTMLElement | null>;
  };
};

export const Navbar = ({ refs }: NavbarProps) => {
  const handleScroll = (key: keyof typeof refs) => {
    refs[key].current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md shadow-lg border-b border-slate-700/50 z-50">
      <nav className="flex items-center justify-center gap-6 py-4 px-4 overflow-x-auto whitespace-nowrap">
        <button
          onClick={() => handleScroll("about")}
          className="text-sm sm:text-base font-medium text-slate-300 hover:text-blue-400 transition-colors duration-200 px-3 py-1 rounded-lg hover:bg-slate-800/50"
        >
          Profile
        </button>
        <button
          onClick={() => handleScroll("strengths")}
          className="text-sm sm:text-base font-medium text-slate-300 hover:text-blue-400 transition-colors duration-200 px-3 py-1 rounded-lg hover:bg-slate-800/50"
        >
          Strengths
        </button>
        <button
          onClick={() => handleScroll("skills")}
          className="text-sm sm:text-base font-medium text-slate-300 hover:text-blue-400 transition-colors duration-200 px-3 py-1 rounded-lg hover:bg-slate-800/50"
        >
          Skills
        </button>
        <button
          onClick={() => handleScroll("summary")}
          className="text-sm sm:text-base font-medium text-slate-300 hover:text-blue-400 transition-colors duration-200 px-3 py-1 rounded-lg hover:bg-slate-800/50"
        >
          Summary
        </button>
      </nav>
    </header>
  );
};
