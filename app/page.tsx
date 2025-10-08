import { Container } from "@/components/container";
import { Projects } from "@/components/projects";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container classname="min-h-[200vh] p-4 md:pt-20 md:pb-10">
        <h1 className="text-primary text-2xl font-bold tracking-tight md:text-4xl">
          Hi, I'm Ankit!
        </h1>
        <p className="text-secondary test-sm pt-4 md:text-base">
          I'm a software developer with a passion of building scalable and
          efficient solutions.
        </p>
        <Projects />
      </Container>
    </div>
  );
}
