import { AnimatedSection } from "../ui/AnimatedSection";

type skillProps = {
  skillsRef: React.RefObject<HTMLElement | null>;
};
export const Skill = ({ skillsRef }: skillProps) => {
  return (
    <AnimatedSection
      className="min-h-screen px-6 py-20 bg-gray-100 scroll-mt-10"
      ref={skillsRef}
    >
      <div className="max-w-3xl mx-auto text-center">
        <div className="relative inline-block">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-800 mb-2 inline-block border-b-4 border-neutral-600 pb-1">
            スキル・技術スタック
          </h2>
        </div>
        <p className="text-gray-700 text-base sm:text-lg mt-6">
          現在までに学んできた技術スタックや扱ったことのあるツール・ライブラリをご紹介します。
          フロントエンドからバックエンド、インフラ、AI領域まで幅広く実践しています。
        </p>
      </div>

      <div className="mt-12 max-w-4xl mx-auto grid sm:grid-cols-2 gap-8 text-gray-800 text-[15px] leading-relaxed">
        <div>
          <h3 className="font-semibold text-lg text-neutral-800 mb-2">
            フロントエンド
          </h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Next.js / React</li>
            <li>TypeScript / Zod を用いた型安全な UI 開発</li>
            <li>Tailwind CSS / Chakra UI によるスタイリング</li>
            <li>React Hook Form + Zod によるフォームバリデーション</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg text-neutral-800 mb-2">
            バックエンド
          </h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Hono + Prisma（REST）</li>
            <li>gRPC</li>
            <li>Go / Node.js</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg text-neutral-800 mb-2">
            インフラ・その他
          </h3>
          <ul className="list-disc list-inside space-y-1">
            <li>AWS（Lambda, S3）</li>
            <li>Docker / docker-compose</li>
            <li>Vercel</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg text-neutral-800 mb-2">
            機械学習・AI
          </h3>
          <ul className="list-disc list-inside space-y-1">
            <li>PyTorch（CNN / RNN）</li>
            <li>画像分類・自然言語処理</li>
            <li>学習済みモデルの活用（ResNetなど）</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg text-neutral-800 mb-2">資格</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>基本情報技術者</li>
            <li>応用情報技術者</li>
            <li>AWS CLF</li>
          </ul>
        </div>
      </div>
      <div className="mt-20 max-w-3xl mx-auto">
        <h3 className="text-2xl font-bold text-neutral-800 mb-4">レベル感</h3>
        <p className="text-gray-700 leading-relaxed text-[17px]">
          TypeScript
          を用いた開発は、個人開発および長期インターンを通して継続的に取り組んできました。
          <br />
          業務レベルでのコードレビューやチーム開発の経験もあり、基本的な設計〜実装〜テストまで一通り行うことができます。
          <br />
          ただし、まだ設計パターンやパフォーマンス最適化、ライブラリの選定といった高度な部分は学習途中であり、今後さらに理解を深めていきたいと考えています。
          <br />
          また、データベース設計なども経験が浅く、実践を通して学んでいく必要があります。
        </p>
      </div>
    </AnimatedSection>
  );
};
