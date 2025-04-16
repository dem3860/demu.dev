export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#eff6ff] via-[#dbeafe] to-[#f0f9ff] text-gray-900 font-sans p-6">
      <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-xl shadow-2xl rounded-3xl overflow-hidden border border-gray-200">
        <div className="bg-gradient-to-r from-[#3b82f6] to-[#06b6d4] p-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Demura Yuto
          </h1>
          <p className="text-white mt-3 text-sm md:text-base">
            神戸大学 情報知能工学科
            3年｜ソフトウェアエンジニア志望｜機械学習×Webを活かしたプロダクト開発に興味があります。
          </p>
        </div>

        <div className="flex flex-col gap-8 p-8">
          <div>
            <h2 className="text-xl font-semibold mb-4 border-b pb-2 border-blue-300">
              💡 取り組んでいること、経験したこと
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li>Next.js / TypeScript を用いたフルスタック開発</li>
              <li>Go言語によるバックエンド開発</li>
              <li>PyTorch を使った画像処理・自然言語処理の基礎的な実装</li>
              <li>AWS（ECS, Lambda, S3）を活用した動画処理基盤の構築</li>
              <li>REST API・gRPC・GraphQL など多様な API 実装経験</li>
              <li>
                クリーンアーキテクチャを用いたディレクトリ構成でのバックエンド開発
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4 border-b pb-2 border-cyan-300">
              🧠 自己紹介
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                高校時代、第一志望校に届かず挫折を味わいましたが、それを糧に
                <strong>文武両道</strong>
                を実現し、卓球部では良い成績を残すことに成功。学業でも常に上位をキープし、
                神戸大学 情報知能工学科 に進学しました。
              </p>
              <p>
                大学では情報知能工学を専攻し、
                <strong>Web開発や機械学習</strong>
                に魅力を感じ、個人開発やインターンなど実践を通じてスキルを深めています。
                現在は特に
                <strong>設計力・保守性を意識した開発</strong>
                を心がけており、Clean Architecture や型安全な API
                設計などに力を入れています。
              </p>
              <p>
                趣味は<strong>卓球</strong>・<strong>ゲーム</strong>・
                <strong>旅行</strong>・
                <strong>音楽やお笑いのライブに行くこと</strong>
                です。
                勉強する時は集中して知識を吸収し、遊ぶ時は全力で楽しむことを大切にしています。
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4 px-8 pb-8">
          <a
            href="/pr"
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full text-sm transition duration-200 text-center"
          >
            強み・PRを見る
          </a>
          <a
            href="/skills"
            className="px-6 py-2 bg-cyan-600 hover:bg-cyan-700 text-white font-medium rounded-full text-sm transition duration-200 text-center"
          >
            スキル・技術スタック
          </a>
        </div>

        <footer className="text-center text-xs text-gray-400 py-4 border-t border-gray-200 bg-white/70">
          © 2025 Demura Yuto Portfolio
        </footer>
      </div>
    </main>
  );
}
