import Career from "@/components/career-marquee";
import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { SubHeadingHighlighted } from "@/components/highlighted-heading";
import { Projects } from "@/components/projects";
import RecentBlogs from "@/components/recent-blogs";
import { Skills } from "@/components/skills";
import { SubHeading } from "@/components/subheading";
import { projects } from "@/constants/projects";

export default function Home() {
  return (
    <div className="flex min-h-screen items-start justify-start bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <Container classname="min-h-screen px-4 pt-32 md:pt-36 lg:pt-32 pb-10">
        <div className="space-y-20">
          <div className="space-y-4">
            <Heading>Hi, I am Ankit!</Heading>
            <SubHeading>
              <SubHeadingHighlighted />
            </SubHeading>
          </div>

          <div className="space-y-2">
            <h3 className="text-xs font-semibold tracking-widest text-slate-400 uppercase">
              Skills & Technologies
            </h3>
            <div className="h-px bg-gradient-to-r from-slate-200 to-transparent"></div>
            <div className="pt-4">
              <Skills />
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-xs font-semibold tracking-widest text-slate-400 uppercase">
              Featured Work
            </h3>
            <div className="h-px bg-gradient-to-r from-slate-200 to-transparent"></div>
            <div className="pt-4">
              <Projects projects={projects.slice(0, 3)} />
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-xs font-semibold tracking-widest text-slate-400 uppercase">
              Latest Articles
            </h3>
            <div className="h-px bg-gradient-to-r from-slate-200 to-transparent"></div>
            <div className="pt-4">
              <RecentBlogs />
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-xs font-semibold tracking-widest text-slate-400 uppercase">
              My Journey
            </h3>
            <div className="h-px bg-gradient-to-r from-slate-200 to-transparent"></div>
            <div className="pt-4">
              <Career />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
