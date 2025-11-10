"use client";

import { useRef } from "react";
import { Navbar } from "@/components/ui/NavBar";
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
    <main className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-50 min-h-screen">
      {/* 背景のグラデーション装飾 */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        <Navbar
          refs={{
            about: profileRef,
            strengths: strengthsRef,
            skills: skillsRef,
            summary: summaryRef,
          }}
        />

        {/* ヒーローセクション */}
        <section className="relative min-h-[70vh] flex items-center justify-center px-6 py-16">
          <div className="max-w-4xl mx-auto text-center">
            {/* メインタイトル */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 leading-tight">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Dem
              </span>
            </h1>

            {/* サブタイトル */}
            <p className="text-lg sm:text-xl md:text-2xl text-slate-300 mb-6 font-light">
              Aspiring Software Engineer
            </p>

            {/* 説明文 */}
            <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
              Web開発を中心に、フロントエンドからバックエンド、AIエージェント開発まで幅広く学習・実践しています。
              <br />
              継続的な成長を大切に、価値のあるソフトウェアを作成できるよう努めます！
            </p>

            {/* スクロールダウンアロー */}
            <div className="animate-bounce">
              <svg
                className="w-6 h-6 mx-auto text-slate-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </div>
        </section>

        <Profile profileRef={profileRef} />
        <Strength strengthsRef={strengthsRef} />
        <Skill skillsRef={skillsRef} />
        <Summary summaryRef={summaryRef} />

        <footer className="text-center py-12 text-slate-400 border-t border-slate-700/50">
          {/* コンタクトボタン */}
          <div className="mb-6">
            <a
              href="mailto:your.email@example.com"
              className="inline-flex items-center gap-2 glass-card px-6 py-3 rounded-lg hover:scale-105 transition-all duration-300 group"
            >
              <svg
                className="w-5 h-5 text-slate-300 group-hover:text-blue-400 transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span className="text-slate-300 font-semibold group-hover:text-blue-400 transition-colors">
                Contact Me
              </span>
            </a>
          </div>

          <p className="text-sm">
            © {new Date().getFullYear()} Dem. All rights reserved.
          </p>
        </footer>
      </div>
    </main>
  );
}
