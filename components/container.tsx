import { cn } from "@/lib/utils";

export const Container = ({
  children,
  classname,
}: {
  children: React.ReactNode;
  classname?: string;
}) => {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-4xl bg-white dark:bg-black",
        classname,
      )}
    >
      {children}
    </div>
  );
};
