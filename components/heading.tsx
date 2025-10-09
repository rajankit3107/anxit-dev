export const Heading = ({
  as: Tag = "h1",
  children,
  classname,
}: {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children?: React.ReactNode;
  classname?: string;
}) => {
  return (
    <Tag className="text-primary text-2xl font-bold tracking-tighter drop-shadow-lg md:text-4xl">
      {children}
    </Tag>
  );
};
