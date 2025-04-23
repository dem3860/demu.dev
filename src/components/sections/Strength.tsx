import { AnimatedSection } from "../ui/AnimatedSection";
type strengthProps = {
  strengthsRef: React.RefObject<HTMLElement | null>;
};
export const Strength = ({ strengthsRef }: strengthProps) => {
  return (
    <AnimatedSection
      className="py-20 scroll-mt-10 relative px-6 bg-gradient-to-br from-cyan-50 to-white"
      ref={strengthsRef}
    >
      <div className="max-w-3xl mx-auto text-center">
        <div className="relative inline-block">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-800 mb-2 inline-block border-b-4 border-neutral-600 pb-1">
            強み・PR
          </h2>
        </div>
        <p className="text-gray-700 text-base sm:text-lg mt-6">
          私の強みは、継続力と実行力をベースに、設計を意識した開発やチームとの協働を大切にしている点です。
        </p>
      </div>
      <div className="mt-12 max-w-2xl mx-auto space-y-8">
        <div className="pl-6 relative">
          <div className="absolute -left-3 top-1 w-3 h-3 bg-neutral-600 rounded-full" />
          <h3 className="text-lg font-semibold text-neutral-800">
            自走力と継続力
          </h3>
          <p className="text-gray-700 mt-2 leading-relaxed">
            Reactの独学から始まり、現在も継続して長期インターンでの開発に取り組んでいます。
            社内で前例のない実装でも、ドキュメントやgithubを読んで参考になる実装や方法を探し、それを基にコードに落とし込むことができます。
          </p>
        </div>
        <div className="pl-6 relative">
          <div className="absolute -left-3 top-1 w-3 h-3 bg-neutral-600 rounded-full" />
          <h3 className="text-lg font-semibold text-neutral-800">
            意欲的に挑戦する姿勢
          </h3>
          <p className="text-gray-700 mt-2 leading-relaxed">
            新しい技術やフレームワークに対しても積極的に学び、実践する姿勢を持っています。
            <br />
            例えば、Next.jsやNestJSを用いたフルスタック開発に挑戦し、実際のプロジェクトでの経験を積んでいます。
            <br />
            また、機械学習やAI技術にも興味を持ち、東京大学の松尾研究所のDeep
            Learning講座やGCI講座に積極的に申し込み、学習を進めています。
            <br />
            資格取得にも力を入れ、基本情報技術者や応用情報技術者、AWS
            CLFの資格を取得しました。
          </p>
        </div>
        <div className="pl-6 relative">
          <div className="absolute -left-3 top-1 w-3 h-3 bg-neutral-600 rounded-full" />
          <h3 className="text-lg font-semibold text-neutral-800">
            設計志向の開発スタイル
          </h3>
          <p className="text-gray-700 mt-2 leading-relaxed">
            Clean Architecture や Zod
            を活用し、保守性と可読性の高いコードを意識しています。
          </p>
        </div>
        <div className="pl-6 relative">
          <div className="absolute -left-3 top-1 w-3 h-3 bg-neutral-600 rounded-full" />
          <h3 className="text-lg font-semibold text-neutral-800">
            幅広い技術スタック
          </h3>
          <p className="text-gray-700 mt-2 leading-relaxed">
            フロントエンドからバックエンド、AIまで、幅広い分野に対応しながら興味を持ち、意欲的に学習と実践を重ねています。
          </p>
        </div>
        <div className="pl-6 relative">
          <div className="absolute -left-3 top-1 w-3 h-3 bg-neutral-600 rounded-full" />
          <h3 className="text-lg font-semibold text-neutral-800">
            チーム開発の意識
          </h3>
          <p className="text-gray-700 mt-2 leading-relaxed">
            PRレビューの活用や報連相を習慣化することで、チームの開発効率と品質向上に貢献しています。
            <br />
            また個人開発の際にはあまり気にできていなかった部分ですが、他人が読んで認知的負荷を軽減できるようなコードを書くことを意識しています。
            <br />
            具体的には、関数名や変数名をわかりやすくすることや、機能をたくさん持たせすぎることを避け、適切に関数に切り出すことなどです。
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
};
