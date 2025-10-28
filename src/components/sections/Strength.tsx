import { AnimatedSection } from "../ui/AnimatedSection";
type strengthProps = {
  strengthsRef: React.RefObject<HTMLElement | null>;
};
export const Strength = ({ strengthsRef }: strengthProps) => {
  return (
    <AnimatedSection className="py-24 scroll-mt-10 px-6" ref={strengthsRef}>
      <div className="max-w-4xl mx-auto">
        {/* セクションタイトル */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
            Strengths
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          <p className="text-slate-300 text-base sm:text-lg mt-6">
            私の強みは、継続力と実行力をベースに、設計を意識した開発やチームとの協働を大切にしている点です。
          </p>
        </div>
        {/* 強みカード */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {[
            {
              title: "自走力と継続力",
              content: (
                <>
                  Reactの独学から始まり、現在も継続して長期インターンでの開発に取り組んでいます。
                  <br />
                  社内で前例のない実装でも、ドキュメントやgithub、記事等を読んで参考になる実装や方法を探し、それを基にコードに落とし込むことができます。
                </>
              ),
            },
            {
              title: "意欲的に挑戦する姿勢",
              content: (
                <>
                  新しい技術やフレームワークに対しても積極的に学び、実践する姿勢を持っています。
                  <br />
                  例えば、Next.jsやNestJSを用いたフルスタック開発に挑戦し、実際のプロジェクトでの経験を積んでいます。
                  <br />
                  また、機械学習やAI技術にも興味を持ち、東京大学の松尾研究所のDeep
                  Learning基礎講座やGCI講座に積極的に参加しました。
                  <br />
                  資格取得にも力を入れ、基本情報技術者や応用情報技術者、AWS
                  CLF、E資格などの資格を取得しました。
                </>
              ),
            },
            {
              title: "コミュニティ活動への参加",
              content: (
                <>
                  Google Gemini
                  アンバサダーとして活動しており、最新のAI技術に触れながら、コミュニティでの情報共有や大学にGoogle
                  Geminiを広げるための活動を行っています。
                  <br />
                  新しい技術を積極的に学び、実践する中で得た知見を周囲と共有することを大切にしています。
                  <br />
                  実際に、身の回りの人にGoogle
                  Geminiを紹介し、興味を持ってもらう活動も行っています。
                </>
              ),
            },
            {
              title: "設計を意識した開発スタイル",
              content: (
                <>
                  Clean
                  Architectureを活用し、保守性と可読性の高いコードを意識しています。
                  <br />
                  それぞれの層の役割を明確に分離し、変更に強い設計を心がけています。
                </>
              ),
            },
            {
              title: "幅広い技術スタック",
              content: (
                <>
                  フロントエンドからバックエンド、AIエージェント開発まで、幅広い分野に対応しながら興味を持ち、意欲的に学習と実践を重ねています。
                </>
              ),
            },
            {
              title: "チーム開発の意識",
              content: (
                <>
                  PRレビューの活用や報連相を習慣化することで、チームの開発効率と品質向上に貢献しています。
                  <br />
                  たとえば、コードレビューを通じてフィードバックを受け入れ、改善点を迅速に反映させることで、より良いコード品質を維持しています。
                  <br />
                  また、他のメンバーとのコミュニケーションを大切にし、協力して問題解決に取り組む姿勢を持っています。
                </>
              ),
            },
            {
              title: "自己成長への意識",
              content: (
                <>
                  常に自己成長を意識し、新しい知識やスキルの習得に努めています。
                  <br />
                  また、学んだことをZennでアウトプットすることで、理解を深めると同時に他者への共有を心がけています。
                </>
              ),
            },
          ].map((item, index) => (
            <div
              key={index}
              className="glass-card p-6 rounded-xl hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white font-bold">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-purple-400 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                    {item.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};
