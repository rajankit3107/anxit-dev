import { Container } from "@/components/container";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container classname="min-h-screen p-4 md:p-10">
        <h1 className="text-primary text-2xl font-bold tracking-tight md:text-4xl">
          Hello, there!
        </h1>
        <p className="text-secondary test-sm pt-4 md:text-base">
          I'm a software developer with a passion of building scalable and
          efficient solutions.
        </p>
      </Container>
    </div>
  );
}
