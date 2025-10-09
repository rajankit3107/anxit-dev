import { Link } from "next-view-transitions";
import { Container } from "./container";
import {
  IconBrandX,
  IconBrandGithub,
  IconBrandLinkedin,
} from "@tabler/icons-react";

export const Footer = () => {
  return (
    <Container classname="flex justify-center border-t border-neutral-100 px-2 py-3 p-4">
      <p className="text-xs text-neutral-500">Built with love by Ankit</p>
      <div className="ml-2 flex items-center justify-center gap-4">
        <Link href="https://x.com/anxit_0731">
          <IconBrandX className="size-4 text-neutral-500 hover:text-neutral-700" />
        </Link>
        <Link href="https://github.com/rajankit3107">
          <IconBrandGithub className="size-4 text-neutral-500 hover:text-neutral-700" />
        </Link>
        <Link href="https://linkedin.com/rajankit3107">
          <IconBrandLinkedin className="size-4 text-neutral-500 hover:text-neutral-700" />
        </Link>
      </div>
    </Container>
  );
};
