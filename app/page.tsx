import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { Projects } from "@/components/projects";
import RecentBlogs from "@/components/recent-blogs";
import { SubHeading } from "@/components/subheading";
import { projects } from "@/constants/projects";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container classname="min-h-screen p-4 md:pt-20 md:pb-10">
        <Heading>Hi, I'm Ankit!</Heading>
        <SubHeading>
          I'm a software developer with a passion of building scalable and
          efficient solutions.I'm a passionate software engineer dedicated to
          crafting elegant solutions for complex problems. With expertise in
          full-stack development, I enjoy building user-centric applications
          that make a difference.
        </SubHeading>
        <Projects projects={projects.slice(0, 3)} />
        <RecentBlogs />
      </Container>
    </div>
  );
}
