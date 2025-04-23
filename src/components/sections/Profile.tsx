import { AnimatedSection } from "../ui/AnimatedSection";

type profileProps = {
  profileRef: React.RefObject<HTMLElement | null>;
};

export const Profile = ({ profileRef }: profileProps) => {
  return (
    <AnimatedSection className="py-20 bg-white scroll-mt-10" ref={profileRef}>
      <div className="max-w-3xl mx-auto text-center">
        <div className="relative inline-block">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-800 mb-2 inline-block border-b-4 border-neutral-600 pb-1">
            自己紹介
          </h2>
        </div>
        <p className="text-gray-700 text-base sm:text-lg mt-6">
          はじめまして。現在神戸大学 工学部 情報知能工学科4年生の{" "}
          <strong className="text-neutral-700">Dem</strong> です。
          <br />
          これまでの経験や興味を、簡潔にご紹介させていただきます。
        </p>
      </div>

      <div className="mt-16 relative border-l-4 border-neutral-200 pl-12 max-w-2xl mx-auto space-y-12">
        <div className="relative">
          <div className="absolute -left-7 top-1 w-5 h-5 bg-neutral-600 rounded-full shadow-lg" />
          <h3 className="text-lg font-semibold text-neutral-800 ml-2">
            2019〜
          </h3>
          <p className="text-gray-700 mt-2 leading-relaxed">
            高校に入学。第一志望に落ちてしまい悔しさを味わうが、それをバネに文武両道を実現。
            卓球部で活動し、卓球では好成績、学業でも優秀な成績をキープ。
          </p>
        </div>

        <div className="relative">
          <div className="absolute -left-7 top-1 w-5 h-5 bg-neutral-600 rounded-full shadow-lg" />
          <h3 className="text-lg font-semibold text-neutral-800 ml-2">
            2022〜
          </h3>
          <p className="text-gray-700 mt-2 leading-relaxed">
            神戸大学
            情報知能工学科に進学。プログラミングやアルゴリズム、コンピュータシステムなど幅広い情報工学を学ぶ。
            <br />
            web開発に興味を持ち、ReactやTypeScriptを独学で学ぶ。
          </p>
        </div>

        <div className="relative">
          <div className="absolute -left-7 top-1 w-5 h-5 bg-neutral-600 rounded-full shadow-lg" />
          <h3 className="text-lg font-semibold text-neutral-800 ml-2">
            2023〜
          </h3>
          <p className="text-gray-700 mt-2 leading-relaxed">
            Web開発と機械学習に強く惹かれ、神戸のベンチャー企業にて長期インターンに参加。
            Clean Architecture や型安全なAPI設計など設計志向にも注力。
            <br />
            フロントエンドからバックエンドまで一貫して実装をさせてもらい、現在も継続中。
            <br />
            幅広い基礎的な知識を身につけたいと思い、基本情報技術者の資格を取得。
          </p>
        </div>

        <div className="relative">
          <div className="absolute -left-7 top-1 w-5 h-5 bg-neutral-600 rounded-full shadow-lg" />
          <h3 className="text-lg font-semibold text-neutral-800 ml-2">
            2024〜
          </h3>
          <p className="text-gray-700 mt-2 leading-relaxed">
            基本情報技術者でみにつけた基礎をもとに、応用情報技術者の資格を取得。
            <br />
            実務でAWSを触らせてもらう機会があり、AWSの基礎を学ぶ。AWS CLF
            も取得。
          </p>
        </div>

        <div className="relative">
          <div className="absolute -left-7 top-1 w-5 h-5 bg-neutral-600 rounded-full shadow-lg" />
          <h3 className="text-lg font-semibold text-neutral-800 ml-2">
            2025〜
          </h3>
          <p className="text-gray-700 mt-2 leading-relaxed">
            さらにスキルを磨くため、Sky株式会社での長期インターンシップに参加。
            Next.js、NestJSを用いたフルスタック開発を行っている。
          </p>
        </div>
      </div>

      <div className="mt-20 max-w-3xl mx-auto">
        <h3 className="text-2xl font-bold text-neutral-800 mb-4">趣味</h3>
        <p className="text-gray-700 leading-relaxed text-[17px]">
          趣味は
          <strong>卓球・旅行・ゲーム・音楽鑑賞・お笑いライブに行くこと</strong>
          です。
          <br />
          大学では体育会卓球部に所属し、競技として取り組みながら多くの仲間と充実した時間を過ごしました。
          音楽は特に<strong>あいみょん</strong>や、既に解散してしまいましたが
          <strong>BiSH</strong>が好きで、よくライブに足を運んでいます。
          <br />
          メリハリを大切にしており、「遊ぶときは全力で、学ぶときも全力で」をモットーに日々を過ごしています。
          切り替えをしてリフレッシュすることで、勉強も遊びも本気で楽しみながら取り組むことができています。
        </p>
      </div>
    </AnimatedSection>
  );
};
