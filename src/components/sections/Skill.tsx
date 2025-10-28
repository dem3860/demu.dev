import { AnimatedSection } from "../ui/AnimatedSection";

type skillProps = {
  skillsRef: React.RefObject<HTMLElement | null>;
};
export const Skill = ({ skillsRef }: skillProps) => {
  return (
    <AnimatedSection className="py-24 px-6 scroll-mt-10" ref={skillsRef}>
      <div className="max-w-5xl mx-auto">
        {/* セクションタイトル */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
            Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
          <p className="text-slate-300 text-base sm:text-lg mt-6">
            現在までに学んできた技術スタックや扱ったことのあるツール・ライブラリをご紹介します。
            フロントエンドからバックエンド、インフラ、AI領域まで幅広く実践しています。
          </p>
        </div>

        {/* スキルカード */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "フロントエンド",
              color: "from-blue-500 to-cyan-500",
              skills: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
            },
            {
              title: "バックエンド",
              color: "from-green-500 to-emerald-500",
              skills: ["NestJS", "Hono", "Prisma", "Node.js"],
            },
            {
              title: "インフラ",
              color: "from-orange-500 to-red-500",
              skills: ["Docker", "AWS", "Vercel", "PostgreSQL"],
            },
            {
              title: "AI・機械学習",
              color: "from-purple-500 to-pink-500",
              skills: ["PyTorch", "mastra"],
            },
            {
              title: "資格",
              color: "from-yellow-500 to-amber-500",
              skills: [
                "基本情報技術者",
                "応用情報技術者",
                "AWS CLF",
                "E資格",
                "OSS-DB Silver",
              ],
            },
          ].map((category, index) => (
            <div
              key={index}
              className="glass-card p-6 rounded-xl hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20"
            >
              <div
                className={`px-4 py-2 rounded-lg bg-gradient-to-r ${category.color} mb-4`}
              >
                <h3 className="font-bold text-white text-center">
                  {category.title}
                </h3>
              </div>
              <ul className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="text-slate-300 text-sm flex items-start gap-2 hover:text-cyan-400 transition-colors duration-200"
                  >
                    <span className="text-cyan-400 mt-1">▸</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {/* レベル感 */}
        <div className="mt-16 max-w-3xl mx-auto glass-card p-8 rounded-2xl">
          <h3 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-6">
            レベル感
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
            TypeScript
            を用いた開発は、個人開発および長期インターンを通して継続的に取り組んできました。
            業務レベルでのチーム開発の経験もあり、基本的な設計〜実装〜テストまで一通り行うことができます。
            ただし、まだ設計パターンやパフォーマンス最適化、ライブラリの選定といった高度な部分は学習途中であり、今後さらに理解を深めていきたいと考えています。
            また、データベース設計なども経験が浅く、実践を通して学んでいく必要があります。
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
};
