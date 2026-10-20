import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight, BookOpen, Brain, Compass, ScanSearch } from "lucide-react";
import researchDesk from "@/assets/psychology-research-desk.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rence Sophia De Leon Atenciana — Psychology Graduate & Portfolio" },
      {
        name: "description",
        content:
          "Meet Rence Sophia De Leon Atenciana, Magna Cum Laude psychology graduate. A thoughtful, people-first perspective on human behavior and possibility.",
      },
      { property: "og:title", content: "Rence Sophia De Leon Atenciana — Psychology Portfolio" },
      {
        property: "og:description",
        content: "A thoughtful, people-first perspective on human behavior and possibility.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <header className="page-wrap flex h-20 items-center justify-between border-b border-border">
        <a href="#home" aria-label="Rence Sophia De Leon Atenciana, home" className="group leading-tight">
          <span className="font-display block text-xl">Christian Lance</span>
          <span className="text-xs tracking-[0.08em] text-muted-foreground">DELA CRUZ</span>
        </a>
        <nav aria-label="Main navigation" className="flex items-center gap-6 sm:gap-9">
          <a className="text-sm font-semibold transition-colors hover:text-ember" href="#focus">Focus</a>
          <a className="text-sm font-semibold transition-colors hover:text-ember" href="#about">About</a>
          <a className="border-b border-foreground pb-1 text-sm font-semibold transition-colors hover:border-ember hover:text-ember" href="#contact">Get in touch <ArrowUpRight aria-hidden="true" className="ml-1 inline size-4" /></a>
        </nav>
      </header>

      <main>
        <section id="home" aria-labelledby="hero-title" className="page-wrap grid items-center gap-10 py-12 sm:py-16 lg:min-h-[680px] lg:grid-cols-[1.03fr_0.97fr] lg:gap-14 lg:py-20">
          <div className="order-2 lg:order-1">
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-9 bg-ember" />
              <p className="eyebrow text-muted-foreground">  Learn  · Adapt · Conquer</p>
            </div>
            <h1 id="hero-title" className="font-display max-w-2xl text-5xl leading-[1.08] sm:text-6xl lg:text-7xl">
              Understanding people. <span className="text-ember">Seeing possibility.</span>
            </h1>
            <p className="mt-7 max-w-lg text-lg leading-8 text-muted-foreground">
              I’m <strong className="font-semibold text-foreground">Rence Sophia De Leon Atenciana</strong>, a psychology graduate who believes that a deeper understanding of people can open the door to meaningful change.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
              <a href="#focus" className="inline-flex min-h-12 items-center gap-3 rounded-sm bg-ink px-5 font-semibold text-ink-foreground transition-transform hover:-translate-y-0.5">
                Explore my perspective <ArrowDown aria-hidden="true" className="size-4" />
              </a>
              <a href="#about" className="inline-flex min-h-12 items-center gap-2 font-semibold transition-colors hover:text-ember">
                A little about me <ArrowUpRight aria-hidden="true" className="size-4" />
              </a>
            </div>
            <div className="mt-12 grid max-w-lg grid-cols-2 border-t border-border pt-5">
              <div className="pr-4">
                <p className="eyebrow text-muted-foreground">Degree</p>
                <p className="mt-2 font-semibold">B.S. in Psychology</p>
              </div>
              <div className="border-l border-border pl-5">
                <p className="eyebrow text-muted-foreground">Recognition</p>
                <p className="mt-2 font-semibold">Magna Cum Laude</p>
              </div>
            </div>
          </div>

          <figure className="group relative order-1 aspect-[4/3] overflow-hidden rounded-sm bg-secondary lg:order-2 lg:aspect-[5/6]">
            <img
              src={researchDesk}
              alt="An open journal and paper notes arranged on a thoughtfully lit research desk"
              width={1536}
              height={1024}
              fetchPriority="high"
              className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-[1.025]"
            />
            <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-ink/80 via-ink/35 to-transparent p-5 pt-20 text-ink-foreground sm:p-7 sm:pt-24">
              <div>
                <p className="eyebrow text-ink-foreground/75">A curious mind, always learning</p>
                <p className="font-display mt-2 text-2xl sm:text-3xl">People, in all their complexity.</p>
              </div>
              <span aria-hidden="true" className="mb-1 hidden rounded-full border border-ink-foreground/40 p-3 sm:inline-flex">
                <ArrowUpRight className="size-5" />
              </span>
            </figcaption>
            <span aria-hidden="true" className="absolute right-5 top-5 flex size-14 items-center justify-center rounded-full bg-background/90 text-ember shadow-sm">
              <Brain className="size-6" />
            </span>
          </figure>
        </section>

        <section id="focus" aria-labelledby="focus-title" className="border-y border-border bg-card py-20 sm:py-24">
          <div className="page-wrap">
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <p className="eyebrow text-ember">A point of view</p>
                <h2 id="focus-title" className="font-display mt-3 max-w-xl text-4xl leading-tight sm:text-5xl">A thoughtful way of looking closer.</h2>
              </div>
              <p className="max-w-md text-base leading-7 text-muted-foreground md:pb-1">
                Psychology brings a richer perspective to the questions that matter: how we grow, what shapes us, and how we understand one another.
              </p>
            </div>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <article className="group min-h-56 rounded-sm border border-border bg-background p-6 transition-colors hover:border-ember sm:p-7">
                <div className="flex items-center justify-between">
                  <span className="eyebrow text-muted-foreground">01 / Curiosity</span>
                  <Brain aria-hidden="true" className="size-5 text-ember" />
                </div>
                <h3 className="font-display mt-9 text-2xl">Mind &amp; behavior</h3>
                <p className="mt-3 leading-7 text-muted-foreground">Exploring how experience, environment, and emotion shape the way we think and act.</p>
              </article>
              <article className="group min-h-56 rounded-sm border border-border bg-background p-6 transition-colors hover:border-ember sm:p-7">
                <div className="flex items-center justify-between">
                  <span className="eyebrow text-muted-foreground">02 / Inquiry</span>
                  <ScanSearch aria-hidden="true" className="size-5 text-ember" />
                </div>
                <h3 className="font-display mt-9 text-2xl">Research &amp; insight</h3>
                <p className="mt-3 leading-7 text-muted-foreground">Approaching questions with care, an open mind, and a respect for evidence.</p>
              </article>
              <article className="group min-h-56 rounded-sm border border-border bg-background p-6 transition-colors hover:border-ember sm:col-span-2 sm:p-7 lg:col-span-1">
                <div className="flex items-center justify-between">
                  <span className="eyebrow text-muted-foreground">03 / Connection</span>
                  <Compass aria-hidden="true" className="size-5 text-ember" />
                </div>
                <h3 className="font-display mt-9 text-2xl">People &amp; possibility</h3>
                <p className="mt-3 leading-7 text-muted-foreground">Seeing the individual first—and recognizing the potential in every person’s story.</p>
              </article>
            </div>
          </div>
        </section>

        <section id="about" aria-labelledby="about-title" className="page-wrap grid gap-10 py-20 sm:py-24 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="eyebrow text-ember">A foundation to build on</p>
            <h2 id="about-title" className="font-display mt-3 text-4xl leading-tight sm:text-5xl">Curiosity, grounded in learning.</h2>
          </div>
          <div className="border-l border-border pl-6 sm:pl-8">
            <BookOpen aria-hidden="true" className="size-6 text-ember" />
            <p className="mt-5 text-xl leading-8 sm:text-2xl sm:leading-9">
              My academic journey has been rooted in the study of people: how we think, what we feel, and the many ways we make meaning.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-border pt-5">
              <span className="eyebrow text-muted-foreground">Education</span>
              <span className="font-semibold">Bachelor of Science in Psychology</span>
              <span aria-hidden="true" className="hidden size-1 rounded-full bg-ember sm:inline-block" />
              <span className="font-semibold text-ember">Magna Cum Laude</span>
            </div>
          </div>
        </section>

        <section id="contact" aria-labelledby="contact-title" className="bg-ink text-ink-foreground">
          <div className="page-wrap flex flex-col gap-8 py-16 sm:flex-row sm:items-end sm:justify-between sm:py-20">
            <div>
              <p className="eyebrow text-ember">The next chapter</p>
              <h2 id="contact-title" className="font-display mt-3 max-w-2xl text-4xl leading-tight sm:text-5xl">Good things begin with a conversation.</h2>
              <p className="mt-4 max-w-lg leading-7 text-ink-foreground/75">Open to meaningful opportunities and thoughtful connections. I’d be glad to hear what you have in mind.</p>
            </div>
            <span aria-hidden="true" className="flex size-14 shrink-0 items-center justify-center rounded-full border border-ink-foreground/30 text-ember">
              <ArrowUpRight className="size-6" />
            </span>
          </div>
        </section>
      </main>

      <footer className="page-wrap flex flex-col gap-2 py-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p className="font-semibold text-foreground">Rence Sophia De Leon Atenciana</p>
        <p>B.S. Psychology · Magna Cum Laude</p>
      </footer>
    </div>
  );
}
