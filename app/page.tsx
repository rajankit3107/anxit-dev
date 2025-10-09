import { Container } from "@/components/container";
import { Projects } from "@/components/projects";
import { TextAnimate } from "@/components/ui/text-animate";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container classname="min-h-[200vh] p-4 md:pt-20 md:pb-10">
        <TextAnimate
          animation="blurInUp"
          by="character"
          once
          className="text-primary text-2xl font-bold tracking-tight md:text-4xl"
        >
          Hi, I'm Ankit!
        </TextAnimate>
        <TextAnimate
          animation="blurInUp"
          by="character"
          once
          className="text-secondary test-sm pt-4 md:text-base"
        >
          I'm a software developer with a passion of building scalable and
          efficient solutions.
        </TextAnimate>
        <Projects />
      </Container>
    </div>
  );
}
