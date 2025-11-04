import Link from "next/link";
import Section from "./components/Section";

export default function Home() {
  return (
    <>
      <Section>
        <div className="min-h-[calc(100svh-156px)] flex flex-col justify-center items-center gap-6">
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-center">Frontend Development</h1>
          <p className="text-center text-lg sm:text-xl max-w-lg">A Simple Blog Website that fetches and renders blog content through <strong>Markdown.md</strong> files</p>
          <div className="w-full justify-center flex flex-col sm:flex-row gap-2">
            <a href="https://mitesh-adelkar.netlify.app/">
              <button className="btn-secondary">Visit Portfolio</button>
            </a>
            <Link href="/blog">
              <button className="btn-primary">Explore Blogs</button>
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}