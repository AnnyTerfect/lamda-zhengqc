import { HTMLAttributes } from "react";
import { cn } from "@nextui-org/react";

export default function Section({
  title,
  className,
  children,
}: {
  title: string;
  className?: HTMLAttributes<HTMLDivElement>["className"];
  children: React.ReactNode;
}) {
  return (
    <section className={cn(className)}>
      <h2 className="text-2xl font-bold">{title}</h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}
