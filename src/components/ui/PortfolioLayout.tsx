type Props = {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
};

export function PortfolioLayout({ title, subtitle, children }: Props) {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-cyan-100 text-gray-900 font-sans p-6">
      <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-xl shadow-2xl rounded-3xl overflow-hidden border border-gray-200">
        <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-white mt-3 text-sm md:text-base">{subtitle}</p>
          )}
        </div>
        {children}
        <footer className="text-center text-xs text-gray-400 py-4 border-t border-gray-200 bg-white/70">
          © 2025 Demura Yuto Portfolio
        </footer>
      </div>
    </main>
  );
}
