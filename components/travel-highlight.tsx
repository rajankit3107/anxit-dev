import { Highlighter } from "./ui/highlighter";

export function SubHeadingTravelHighlighted() {
  return (
    <p className="pt-4 text-sm text-neutral-600 md:text-sm">
      I love to{" "}
      <Highlighter action="highlight" color="#FFB6C1">
        travel and explore new places
      </Highlighter>
      . I&apos;m a big fan of{" "}
      <Highlighter action="highlight" color="#90EE90">
        nature and adventure
      </Highlighter>
      . I&apos;m also a big fan of{" "}
      <Highlighter action="highlight" color="#87CEEB">
        technology and innovation
      </Highlighter>
      .
    </p>
  );
}
