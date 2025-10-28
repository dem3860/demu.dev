import { AnimatedSection } from "../ui/AnimatedSection";

type profileProps = {
  profileRef: React.RefObject<HTMLElement | null>;
};

export const Profile = ({ profileRef }: profileProps) => {
  return (
    <AnimatedSection className="py-24 scroll-mt-10 px-6" ref={profileRef}>
      <div className="max-w-4xl mx-auto">
        {/* セクションタイトル */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Profile
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
          <p className="text-slate-300 text-base sm:text-lg mt-6 leading-relaxed">
            はじめまして。現在神戸大学 工学部 情報知能工学科4年生の{" "}
            <span className="text-blue-400 font-semibold">Dem</span> です。
            <br />
            これまでの経験や興味を、簡潔にご紹介させていただきます。
          </p>
        </div>

        {/* タイムライン */}
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-cyan-500 to-purple-500"></div>

          <div className="space-y-12">
            {[
              {
                year: "2019",
                content: (
                  <>
                    高校入学。第一志望に落ちてしまい悔しさを味わうが、それをバネに文武両道を実現。
                    <br />
                    卓球部で活動し、卓球では好成績、学業でも優秀な成績をキープ。
                  </>
                ),
              },
              {
                year: "2022",
                content: (
                  <>
                    神戸大学 情報知能工学科に進学。
                    <br />
                    プログラミングやアルゴリズム、コンピュータシステムなど幅広い情報工学を学ぶ。
                    <br />
                    Web開発に興味を持ち、ReactやTypeScriptを独学で学ぶ。
                  </>
                ),
              },
              {
                year: "2023",
                content: (
                  <>
                    Web開発と機械学習に強く惹かれ、神戸のベンチャー企業であるdigeon株式会社にて長期インターンに参加。
                    <br />
                    Clean Architecture や型安全なAPI設計など設計志向にも注力。
                    <br />
                    フロントエンドからバックエンドまで一貫して実装をさせてもらう。
                    <br />
                    幅広い基礎的な知識を身につけたいと思い、基本情報技術者の資格を取得。
                  </>
                ),
              },
              {
                year: "2024",
                content: (
                  <>
                    基本情報技術者で身につけた基礎をもとに、応用情報技術者の資格を取得。
                    <br />
                    実務でAWSを触らせてもらう機会があり、AWSの基礎を学ぶ。AWS
                    CLF も取得。
                  </>
                ),
              },
              {
                year: "2025",
                content: (
                  <>
                    さらにスキルを磨くため、digeon株式会社を退職し、Sky株式会社での長期インターンシップに参加。
                    <br />
                    Next.js、NestJSを用いたフルスタック開発を行っている。
                    <br />
                    AI分野にも興味を持ち、東京大学松尾研究所のDeep
                    Learning基礎講座やGCI講座を受講。
                    <br />
                    資格取得にも力を入れ、E資格を取得。また、9月にはOSS-DB
                    Silverも取得。
                    <br />
                    現在はSky株式会社でAIエージェント開発に携わっている。
                  </>
                ),
              },
            ].map((item, index) => (
              <div key={index} className="relative pl-20 group">
                <div className="absolute left-5 top-2 w-7 h-7 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full shadow-lg shadow-blue-500/50 group-hover:scale-125 transition-transform duration-300 flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <div className="glass-card p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-blue-400 mb-3">
                    {item.year}
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    {item.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 趣味セクション */}
        <div className="mt-20 max-w-3xl mx-auto glass-card p-8 rounded-2xl">
          <h3 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-6">
            Hobby
          </h3>
          <div className="text-slate-300 leading-relaxed text-sm sm:text-base space-y-4">
            <p>
              趣味は
              <span className="text-cyan-400 font-semibold">
                卓球・旅行・漫画・音楽鑑賞・お笑いライブに行くこと
              </span>
              です。
            </p>
            <p>
              大学では体育会卓球部に所属し、競技として取り組みながら多くの仲間と充実した時間を過ごしました。
            </p>
            <p>
              音楽は特に
              <span className="text-pink-400 font-semibold">あいみょん</span>
              や、既に解散してしまいましたが
              <span className="text-purple-400 font-semibold">BiSH</span>
              が好きで、よくライブに足を運んでいます。
            </p>
            <p>
              また、漫画が大好きで、特に
              <span className="text-yellow-400 font-semibold">
                ジョジョの奇妙な冒険
              </span>
              が好きです！4部と5部がお気に入りです！
              <br />
              独特な世界観と魅力的なキャラクターが好きで、ジョジョ専用の棚を置き、漫画やフィギュアを飾っています。
            </p>
            <p>
              メリハリを大切にしており、
              <span className="text-blue-400 font-semibold">
                「遊ぶときは全力で、学ぶときも全力で」
              </span>
              をモットーに日々を過ごしています。
              <br />
              切り替えをしてリフレッシュすることで、勉強も遊びも本気で楽しみながら取り組むことができています。
            </p>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};
