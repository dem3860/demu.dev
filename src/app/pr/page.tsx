import { PortfolioLayout } from "@/components/ui/PortfolioLayout";
import { Section } from "@/components/ui/Section";
import Link from "next/link";

export default function Strengths() {
  return (
    <PortfolioLayout
      title="強み・PR"
      subtitle="自身の特徴・強み・価値観をご紹介します。"
    >
      <div className="flex flex-col gap-12 px-6 py-10 sm:px-12 sm:py-12">
        <Section title="🚀 私の強み" borderColor="border-blue-300">
          <ul className="space-y-6 text-gray-800 list-disc list-inside leading-relaxed text-[15px] sm:text-base">
            <li>
              <strong className="font-semibold text-blue-700">
                自走力と継続力:
              </strong>{" "}
              独学やインターン、長期の個人開発を通して自ら学び続ける力を培ってきました。インターンは学部2年生の夏から始め、現在も継続中です。それまでは独学でUdemyや書籍を用いてReactの基礎を勉強し、TwitterクローンアプリやTodoアプリなどを作成して技術に触れることを心がけていました。
            </li>
            <li>
              <strong className="font-semibold text-blue-700">
                設計志向の開発スタイル:
              </strong>{" "}
              Clean
              Architectureや責務分離を意識した構成で、保守性・可読性に優れたコードを書くことを心がけています。また、zodを用いて型定義を行い、型安全なAPI設計を実現しています。
            </li>
            <li>
              <strong className="font-semibold text-blue-700">
                幅広い技術スタック:
              </strong>{" "}
              Web（Next.js/Node.js/Go）からAI（PyTorch）まで幅広く経験があり、必要に応じて柔軟に技術選定ができます。現在はフロントにNext.js、バックエンドにNode.jsを用い、hono
              +
              PrismaでのAPI開発を行っています。AWSの使用経験もあり、S3にアップロードされた動画をBytesIOを使ってメモリ上で処理・分割するシステムを構築しました。
            </li>
            <li>
              <strong className="font-semibold text-blue-700">
                コミュニケーションとチーム開発:
              </strong>{" "}
              バイト・インターンでの開発経験により、報連相やチーム連携の重要性を実感し、円滑なやり取りを意識しています。GitHubでのPull
              Requestを活用したコードレビューの経験もあり、チームの生産性向上に貢献できます。
            </li>
          </ul>
        </Section>

        <Section title="🌱 成長意欲と価値観" borderColor="border-cyan-300">
          <p className="text-gray-800 leading-relaxed text-[15px] sm:text-base">
            成長することに貪欲で、資格取得にも力を入れています。基本情報技術者、応用情報技術者、AWS
            CLFを所持しており、IPAのデータベーススペシャリストを受験予定です。資格取得を目的とせず、そこで得た知識を実務に活かすことを重視しています。
            <br className="hidden sm:block" />
            また、開発を進める上で、
            <strong className="text-cyan-700">
              見やすく・使いやすいUIや体験
            </strong>
            を意識するようにしています。
            <br className="hidden sm:block" />
            特に、
            <strong className="text-cyan-700">
              日常の課題や業務フローの改善
            </strong>
            といった 現実の問題に寄り添うような開発に強い関心を持っています。
          </p>
        </Section>
      </div>

      <div className="flex flex-col sm:flex-row justify-center gap-4 px-8 pb-8">
        <Link
          href="/"
          className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full text-sm transition duration-200 text-center"
        >
          自己紹介を見る
        </Link>
        <Link
          href="/skills"
          className="px-6 py-2 bg-cyan-600 hover:bg-cyan-700 text-white font-medium rounded-full text-sm transition duration-200 text-center"
        >
          スキル・技術スタックを見る
        </Link>
      </div>
    </PortfolioLayout>
  );
}
