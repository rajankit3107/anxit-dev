import { Highlighter } from "./ui/highlighter";

export function SubHeadingHighlighted() {
  return (
    <p className="pt-4 text-sm text-neutral-600 md:text-sm">
      I&apos;m a software developer with a passion of building{" "}
      <Highlighter action="highlight" color="#ffd1dc">
        scalable and efficient solutions
      </Highlighter>
      . I&apos;m a passionate software engineer dedicated to crafting{" "}
      <Highlighter action="highlight" color="#87CEFA">
        elegant solutions
      </Highlighter>{" "}
      for complex problems. With expertise in{" "}
      <Highlighter action="highlight" color="#FFD700">
        full-stack development
      </Highlighter>
      , I enjoy building{" "}
      <Highlighter action="highlight" color="#98FF98">
        user-centric applications
      </Highlighter>{" "}
      that make a difference.
    </p>
  );
}
