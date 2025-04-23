import { AnimatedSection } from "../ui/AnimatedSection";

type summaryProps = {
  summaryRef: React.RefObject<HTMLElement | null>;
};
export const Summary = ({ summaryRef }: summaryProps) => {
  return (
    <AnimatedSection className="py-20 bg-gray-50 scroll-mt-10" ref={summaryRef}>
      <div className="max-w-3xl mx-auto text-center">
        <div className="relative inline-block">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6 inline-block border-b-4 border-gray-500 pb-1">
            まとめ
          </h2>
        </div>
        <p className="text-gray-700 text-[17px] mt-8 leading-loose text-left">
          私のポートフォリオをご覧いただき、ありがとうございます。
          これまで紹介してきた内容からも分かる通り、私は Web
          開発や設計を中心とした開発に強い関心を持ち、
          継続的な学習と実践を通じて着実にスキルを積み上げてきました。
          個人開発では使いやすさや保守性を意識した設計、インターンではチーム開発と責任ある実装を経験し、
          それぞれの環境で異なる学びを得ています。
        </p>
        <p className="text-gray-700 text-[17px] mt-6 leading-loose text-left">
          今後も技術的な挑戦を続けながら、自主的に行動し、
          価値のあるソフトウェアを届けられるエンジニアを目指して成長していきたいと考えています。
        </p>
        <p className="text-gray-700 text-[17px] mt-10 leading-loose text-left">
          🔗 興味を持っていただけた方は、以下のリンクもぜひご覧ください：
          <br />
          ・GitHub：
          <a
            href="https://github.com/dem3860"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            https://github.com/dem3860
          </a>
          <br />
          ・Zenn：
          <a
            href="https://zenn.dev/dem3860"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            https://zenn.dev/dem3860
          </a>
        </p>
      </div>
    </AnimatedSection>
  );
};
