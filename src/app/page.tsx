"use client";

import { useRef } from "react";
import { Navbar } from "@/components/ui/NavBar";
import { motion } from "framer-motion";
import Image from "next/image";
import headerImage from "@/../public/header.jpg";

export default function Home() {
  const aboutRef = useRef<HTMLElement | null>(null);
  const strengthsRef = useRef<HTMLElement | null>(null);
  const skillsRef = useRef<HTMLElement | null>(null);
  const summaryRef = useRef<HTMLElement | null>(null);

  return (
    <main className="bg-white text-gray-800">
      <Navbar
        refs={{
          about: aboutRef,
          strengths: strengthsRef,
          skills: skillsRef,
          summary: summaryRef,
        }}
      />
      <Image
        src={headerImage}
        alt="Header Image"
        priority
        className="w-full h-auto max-h-[900px] object-cover"
      />

      <motion.section
        ref={aboutRef}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-20 bg-white"
      >
        <div className="max-w-3xl mx-auto text-center">
          <div className="relative inline-block">
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-800 mb-2 inline-block border-b-4 border-neutral-600 pb-1">
              自己紹介
            </h2>
          </div>
          <p className="text-gray-700 text-base sm:text-lg mt-6">
            はじめまして。現在神戸大学情報知能工学科4年生の{" "}
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
              フロントエンドからバックエンドまで一貫して実装をさせてもらい、実践的なスキルを習得中。
            </p>
          </div>

          <div className="relative">
            <div className="absolute -left-7 top-1 w-5 h-5 bg-neutral-600 rounded-full shadow-lg" />
            <h3 className="text-lg font-semibold text-neutral-800 ml-2">
              2024〜
            </h3>
            <p className="text-gray-700 mt-2 leading-relaxed">
              さらにスキルを磨くため、とある企業での長期インターンシップに参加。
              Next.js、NestJSを用いたフルスタック開発を行っている。
            </p>
          </div>
        </div>

        <div className="mt-20 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-neutral-800 mb-4">趣味</h3>
          <p className="text-gray-700 leading-relaxed text-[17px]">
            趣味は
            <strong>
              卓球・旅行・ゲーム・音楽鑑賞・お笑いライブに行くこと
            </strong>
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
      </motion.section>

      <motion.section
        ref={strengthsRef}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative px-6 py-20 bg-gradient-to-br from-cyan-50 to-white"
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
      </motion.section>

      <motion.section
        ref={skillsRef}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="min-h-screen px-6 py-20 bg-gray-100"
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
            <h3 className="font-semibold text-lg text-neutral-800 mb-2">
              資格
            </h3>
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
      </motion.section>

      <motion.section
        ref={summaryRef}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-20 bg-gray-50"
      >
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
      </motion.section>
      <footer className="text-center text-sm py-6 text-gray-500">
        © {new Date().getFullYear()} Demura Yuto. All rights reserved.
      </footer>
    </main>
  );
}
