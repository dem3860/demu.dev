type Props = {
  title: string;
  borderColor?: string;
  children: React.ReactNode;
};

export function Section({
  title,
  borderColor = "border-gray-300",
  children,
}: Props) {
  return (
    <section>
      <h2 className={`text-xl font-semibold mb-4 border-b pb-2 ${borderColor}`}>
        {title}
      </h2>
      {children}
    </section>
  );
}
