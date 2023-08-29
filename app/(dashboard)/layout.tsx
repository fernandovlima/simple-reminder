export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <section
      className={
        "mx-auto my-0 flex w-full max-w-4xl flex-col items-center gap-6"
      }
    >
      {children}
    </section>
  );
}
