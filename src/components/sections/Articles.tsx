"use client";

import { AnimatedSection } from "../ui/AnimatedSection";
import { useEffect, useState } from "react";

type articlesProps = {
  articlesRef: React.RefObject<HTMLElement | null>;
};

type Article = {
  title: string;
  path: string;
  published_at: string;
  emoji: string;
  liked_count: number;
  body_letters_count: number;
};

const ArticleCard = ({ article }: { article: Article }) => {
  const articleUrl = `https://zenn.dev${article.path}`;
  const formattedDate = new Date(article.published_at).toLocaleDateString(
    "ja-JP",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  return (
    <a
      href={articleUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="glass-card rounded-xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20 block"
    >
      <div className="flex items-start gap-4">
        {/* 絵文字アイコン */}
        <div className="text-4xl flex-shrink-0">{article.emoji}</div>

        <div className="flex-1 min-w-0">
          {/* タイトル */}
          <h3 className="text-lg font-bold text-purple-400 mb-2 line-clamp-2 hover:text-purple-300 transition-colors">
            {article.title}
          </h3>

          {/* メタ情報 */}
          <div className="flex flex-wrap gap-4 text-xs text-slate-400 mb-3">
            <div className="flex items-center gap-1">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span>{formattedDate}</span>
            </div>
            <div className="flex items-center gap-1">
              <svg
                className="w-4 h-4 text-pink-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
              <span>{article.liked_count}</span>
            </div>
            <div className="flex items-center gap-1">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <span>
                {Math.ceil(article.body_letters_count / 600)}分で読めます
              </span>
            </div>
          </div>

          {/* 記事へのリンク表示 */}
          <div className="flex items-center gap-2 text-sm text-cyan-400">
            <span>記事を読む</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </div>
        </div>
      </div>
    </a>
  );
};

export const Articles = ({ articlesRef }: articlesProps) => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        // Zenn APIから記事を取得（ユーザー名を実際のものに変更してください）
        const res = await fetch("/api/zenn");

        console.log("Zenn API response status:", res);

        if (!res.ok) {
          throw new Error("記事の取得に失敗しました");
        }

        const data = await res.json();
        setArticles(data.articles || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : "エラーが発生しました");
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  return (
    <AnimatedSection className="py-24 scroll-mt-10 px-6" ref={articlesRef}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
            Articles
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          <p className="text-slate-300 text-base sm:text-lg mt-6">
            技術ブログで公開している記事の一覧です。学んだことや実装した内容をアウトプットしています。
          </p>
        </div>

        <div className="space-y-6">
          {loading && (
            <div className="text-center text-slate-400">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-400 mx-auto mb-4"></div>
              <p>記事を読み込み中...</p>
            </div>
          )}

          {error && (
            <div className="glass-card p-8 rounded-xl text-center">
              <p className="text-red-400 mb-2">⚠️ {error}</p>
              <p className="text-slate-400 text-sm">
                記事の取得に失敗しました。しばらく時間をおいて再度お試しください。
              </p>
            </div>
          )}

          {!loading && !error && articles.length === 0 && (
            <div className="glass-card p-8 rounded-xl text-center">
              <p className="text-slate-400">記事がまだありません</p>
            </div>
          )}

          {!loading &&
            !error &&
            articles.map((article, index) => (
              <ArticleCard key={index} article={article} />
            ))}
        </div>

        {!loading && !error && articles.length > 0 && (
          <div className="text-center mt-12">
            <a
              href="https://zenn.dev/dem3860"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 glass-card px-6 py-3 rounded-lg hover:scale-105 transition-all duration-300 group"
            >
              <svg
                className="w-5 h-5 fill-current text-slate-300 group-hover:text-cyan-400"
                viewBox="0 0 24 24"
              >
                <path d="M.264 23.771h4.984c.264 0 .498-.147.645-.352L19.614.874c.176-.293-.029-.645-.381-.645h-4.72c-.235 0-.44.117-.557.323L.03 23.361c-.088.176-.029.41.234.41zm17.181 0h6.079c.293 0 .557-.234.557-.528 0-.088-.029-.205-.088-.292l-2.557-4.367c-.176-.264-.499-.352-.762-.234-.205.088-.352.264-.44.469l-2.821 4.455c-.146.234-.029.497.234.497z" />
              </svg>
              <span className="text-slate-300 font-semibold group-hover:text-cyan-400 transition-colors">
                Zennで全ての記事を見る
              </span>
            </a>
          </div>
        )}
      </div>
    </AnimatedSection>
  );
};
