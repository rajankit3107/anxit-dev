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
    <Tag className="text-secondary test-sm pt-4 md:text-base">{children}</Tag>
  );
};
