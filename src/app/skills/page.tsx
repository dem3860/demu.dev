import { PortfolioLayout } from "@/components/ui/PortfolioLayout";
import { Section } from "@/components/ui/Section";
import Link from "next/link";

export default function Skills() {
  return (
    <PortfolioLayout
      title="スキル・技術スタック"
      subtitle="これまでに学んだこと・扱ったことのある技術について紹介します。"
    >
      <div className="flex flex-col gap-12 px-6 py-10 sm:px-12 sm:py-12">
        <Section title="🛠 フロントエンド" borderColor="border-blue-300">
          <ul className="space-y-4 text-gray-800 list-disc list-inside leading-relaxed text-[15px] sm:text-base">
            <li>Next.js / React</li>
            <li>TypeScript を用いた型安全な UI 開発</li>
            <li>Tailwind CSS / Chakra UI によるスタイリング</li>
            <li>React Hook Form + Zod によるフォームバリデーション</li>
          </ul>
        </Section>

        <Section title="⚙️ バックエンド" borderColor="border-blue-300">
          <ul className="space-y-4 text-gray-800 list-disc list-inside leading-relaxed text-[15px] sm:text-base">
            <li>Hono + Prisma による REST API 開発</li>
            <li>gRPC・GraphQL を用いた BFF 層の実装</li>
            <li>Go / Node.js（Express）でのバックエンド開発</li>
            <li>JWT・Cookie による認証管理</li>
          </ul>
        </Section>

        <Section title="☁️ インフラ・その他" borderColor="border-blue-300">
          <ul className="space-y-4 text-gray-800 list-disc list-inside leading-relaxed text-[15px] sm:text-base">
            <li>AWS（ECS, Lambda, S3）による簡易的な動画処理基盤の構築</li>
            <li>Docker / docker-compose による開発環境の構築</li>
            <li>Vercel によるフロントエンドのホスティング</li>
          </ul>
        </Section>

        <Section title="🤖 機械学習・AI" borderColor="border-blue-300">
          <ul className="space-y-4 text-gray-800 list-disc list-inside leading-relaxed text-[15px] sm:text-base">
            <li>PyTorch による CNN・RNN・Transformer モデルの実装</li>
            <li>画像分類 / 顔認識 / 自然言語処理の簡易タスク</li>
            <li>学習済みモデル（ResNet, CLIP など）の活用</li>
          </ul>
        </Section>
      </div>

      <div className="flex flex-col sm:flex-row justify-center gap-4 px-8 pb-8">
        <Link
          href="/pr"
          className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full text-sm transition duration-200 text-center"
        >
          強み・PRを見る
        </Link>
        <Link
          href="/s"
          className="px-6 py-2 bg-cyan-600 hover:bg-cyan-700 text-white font-medium rounded-full text-sm transition duration-200 text-center"
        >
          自己紹介を見る
        </Link>
      </div>
    </PortfolioLayout>
  );
}
