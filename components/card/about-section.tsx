interface Props {
  header: string;
  children?: React.ReactNode;
}
export const AboutSection = ({ header, children }: Props) => {
  return (
    <section className="p-5 border-t">
      <header>
        <h4 className="text-lg font-medium opacity-70">{header}</h4>
      </header>
      {children}
    </section>
  );
};
