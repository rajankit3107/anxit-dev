import { ContactForm } from "@/components/contact-form";
import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { SubHeading } from "@/components/subheading";

export default function ContactPage() {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container classname="min-h-screen px-10 md:pt-20 md:pb-10">
        <Heading>Contact Me</Heading>
        <SubHeading>Reach out to me to inquire more about me</SubHeading>
        <ContactForm />
      </Container>
    </div>
  );
}
