import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { Projects } from "@/components/projects";
import { SubHeading } from "@/components/subheading";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container classname="min-h-[200vh] p-4 md:pt-20 md:pb-10">
        <Heading>Hi, I'm Ankit!</Heading>
        <SubHeading>
          I'm a software developer with a passion of building scalable and
          efficient solutions.
        </SubHeading>
        <Projects />
      </Container>
    </div>
  );
}
