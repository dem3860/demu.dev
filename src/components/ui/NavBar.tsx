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
    <header className="fixed top-0 w-full bg-white/70 backdrop-blur-sm shadow z-50">
      <nav className="flex justify-center space-x-6 py-4">
        <button
          onClick={() => handleScroll("about")}
          className="text-sm font-medium text-gray-700 hover:text-blue-600"
        >
          自己紹介
        </button>
        <button
          onClick={() => handleScroll("strengths")}
          className="text-sm font-medium text-gray-700 hover:text-blue-600"
        >
          強み・PR
        </button>
        <button
          onClick={() => handleScroll("skills")}
          className="text-sm font-medium text-gray-700 hover:text-blue-600"
        >
          スキル
        </button>
        <button
          onClick={() => handleScroll("summary")}
          className="text-sm font-medium text-gray-700 hover:text-blue-600"
        >
          まとめ
        </button>
      </nav>
    </header>
  );
};
