import { cn } from "@/lib/utils";

export const SubHeading = ({
  as: Tag = "h2",
  children,
  classname,
}: {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children?: React.ReactNode;
  classname?: string;
}) => {
  return (
    <Tag className={cn("text-secondary pt-4 text-sm md:text-base", classname)}>
      {children}
    </Tag>
  );
};
