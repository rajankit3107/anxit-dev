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
        "max-w-4xl mx-auto bg-white dark:bg-black p-4 md:p-10",
        classname
      )}
    >
      {children}
    </div>
  );
};
