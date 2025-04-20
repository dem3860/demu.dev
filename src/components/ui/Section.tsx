// components/ui/Section.tsx
type SectionProps = {
  title: string;
  borderColor?: string;
  id?: string;
  children: React.ReactNode;
};

export function Section({
  title,
  borderColor = "border-gray-300",
  id,
  children,
}: SectionProps) {
  return (
    <section id={id} className={`border-l-4 pl-4 ${borderColor}`}>
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <div>{children}</div>
    </section>
  );
}
