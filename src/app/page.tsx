"use client";

import { useRef } from "react";
import { Navbar } from "@/components/ui/NavBar";
import Image from "next/image";
import headerImage from "@/../public/header.jpg";
import { Profile } from "@/components/sections/Profile";
import { Strength } from "@/components/sections/Strength";
import { Skill } from "@/components/sections/Skill";
import { Summary } from "@/components/sections/Summary";

export default function Home() {
  const profileRef = useRef<HTMLHeadingElement | null>(null);
  const strengthsRef = useRef<HTMLElement | null>(null);
  const skillsRef = useRef<HTMLElement | null>(null);
  const summaryRef = useRef<HTMLElement | null>(null);

  return (
    <main className="bg-white text-gray-800">
      <Navbar
        refs={{
          about: profileRef,
          strengths: strengthsRef,
          skills: skillsRef,
          summary: summaryRef,
        }}
      />
      <Image
        src={headerImage}
        alt="Header Image"
        priority
        className="w-full h-auto max-h-[900px] object-cover"
      />
      <Profile profileRef={profileRef} />
      <Strength strengthsRef={strengthsRef} />
      <Skill skillsRef={skillsRef} />
      <Summary summaryRef={summaryRef} />
      <footer className="text-center text-sm py-6 text-gray-500">
        © {new Date().getFullYear()} Demura Yuto. All rights reserved.
      </footer>
    </main>
  );
}
