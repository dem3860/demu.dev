import { AnimatedSection } from "../ui/AnimatedSection";
import Image from "next/image";

type projectsProps = {
  projectsRef: React.RefObject<HTMLElement | null>;
};

type ProjectCardProps = {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  imageUrl?: string;
};

const ProjectCard = ({
  title,
  description,
  technologies,
  githubUrl,
  demoUrl,
  imageUrl,
}: ProjectCardProps) => {
  return (
    <div className="glass-card rounded-xl overflow-hidden hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20">
      {/* プロジェクト画像 */}
      {imageUrl && (
        <div className="relative h-48 bg-gradient-to-br from-slate-800 to-slate-900 overflow-hidden">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
          />
        </div>
      )}

      {/* コンテンツ */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-cyan-400 mb-3">{title}</h3>
        <p className="text-slate-300 text-sm leading-relaxed mb-4">
          {description}
        </p>

        {/* 使用技術 */}
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs font-semibold bg-slate-700/50 text-cyan-300 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* リンクボタン */}
        <div className="flex gap-3">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-slate-700/50 hover:bg-slate-700 rounded-lg transition-colors duration-200"
            >
              <svg
                className="w-5 h-5 fill-current text-slate-300"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              <span className="text-sm text-slate-300">GitHub</span>
            </a>
          )}
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 rounded-lg transition-colors duration-200"
            >
              <svg
                className="w-5 h-5 fill-current text-white"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-3 17v-10l9 5.146-9 4.854z" />
              </svg>
              <span className="text-sm text-white font-semibold">Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export const Projects = ({ projectsRef }: projectsProps) => {
  return (
    <AnimatedSection className="py-24 scroll-mt-10 px-6" ref={projectsRef}>
      <div className="max-w-6xl mx-auto">
        {/* セクションタイトル */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-green-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-cyan-500 mx-auto rounded-full"></div>
          <p className="text-slate-300 text-base sm:text-lg mt-6">
            これまでに開発したプロジェクトや個人開発の成果物をご紹介します。
          </p>
        </div>

        {/* プロジェクトカード */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Design Assistant */}
          <ProjectCard
            title="Design Assistant"
            description="AIを活用したDB設計支援ツール。ユーザーの作成したい要件を送ることでER図やDB設計を行ってくれます。"
            technologies={["Mastra", "Next.js", "TypeScript", "Tailwind CSS"]}
            githubUrl="https://github.com/dem3860/design-assistant"
            demoUrl="https://design-assistant-bnudfw824-demu3860s-projects.vercel.app/"
          />

          {/* AI Commit CLI */}
          <ProjectCard
            title="AI Commit CLI"
            description="AIを使用してGitコミットメッセージの自動生成を行います。生成されたメッセージを承諾するとコミットまで自動で行うことができます。変更内容を解析し、適切なコミットメッセージを提案します。"
            technologies={["JavaScript", "CLI"]}
            githubUrl="https://github.com/dem3860/ai-commit-cli"
          />
        </div>
      </div>
    </AnimatedSection>
  );
};
