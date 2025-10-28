import { AnimatedSection } from "../ui/AnimatedSection";

type summaryProps = {
  summaryRef: React.RefObject<HTMLElement | null>;
};
export const Summary = ({ summaryRef }: summaryProps) => {
  return (
    <AnimatedSection className="py-24 scroll-mt-10 px-6" ref={summaryRef}>
      <div className="max-w-4xl mx-auto">
        {/* セクションタイトル */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
            Summary
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 mx-auto rounded-full"></div>
        </div>

        {/* メインコンテンツ */}
        <div className="glass-card p-8 sm:p-12 rounded-2xl mb-12">
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6">
            ここまで私のポートフォリオをご覧いただき、ありがとうございます。
            これまで紹介してきた内容からも分かる通り、私は Web
            開発や設計を中心とした開発に強い関心を持ち、
            継続的な学習と実践を通じて着実にスキルを積み上げてきました。
            インターンではチーム開発と責任ある実装を経験し、個人では興味のある分野や関心のある技術に対して自主的に学びを深め、それぞれの環境で異なる学びを得ています。
          </p>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            今後も技術的な挑戦を続けながら、自主的に行動し、
            価値のあるソフトウェアを届けられるエンジニアを目指して成長していきたいと考えています。
          </p>
        </div>

        {/* リンクセクション */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Links</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://github.com/dem3860"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card px-8 py-4 rounded-xl hover:scale-105 transition-all duration-300 flex items-center gap-3 w-full sm:w-auto justify-center group"
            >
              <svg
                className="w-6 h-6 fill-current text-slate-300 group-hover:text-blue-400"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              <span className="text-slate-300 font-semibold group-hover:text-blue-400">
                GitHub
              </span>
            </a>
            <a
              href="https://x.com/toufu_engineer"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card px-8 py-4 rounded-xl hover:scale-105 transition-all duration-300 flex items-center gap-3 w-full sm:w-auto justify-center group"
            >
              <svg
                className="w-6 h-6 fill-current text-slate-300 group-hover:text-sky-400"
                viewBox="0 0 24 24"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              <span className="text-slate-300 font-semibold group-hover:text-sky-400">
                X (Twitter)
              </span>
            </a>
            <a
              href="https://zenn.dev/dem3860"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card px-8 py-4 rounded-xl hover:scale-105 transition-all duration-300 flex items-center gap-3 w-full sm:w-auto justify-center group"
            >
              <svg
                className="w-6 h-6 fill-current text-slate-300 group-hover:text-cyan-400"
                viewBox="0 0 24 24"
              >
                <path d="M.264 23.771h4.984c.264 0 .498-.147.645-.352L19.614.874c.176-.293-.029-.645-.381-.645h-4.72c-.235 0-.44.117-.557.323L.03 23.361c-.088.176-.029.41.234.41zm17.181 0h6.079c.293 0 .557-.234.557-.528 0-.088-.029-.205-.088-.292l-2.557-4.367c-.176-.264-.499-.352-.762-.234-.205.088-.352.264-.44.469l-2.821 4.455c-.146.234-.029.497.234.497z" />
              </svg>
              <span className="text-slate-300 font-semibold group-hover:text-cyan-400">
                Zenn
              </span>
            </a>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};
