import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, PageHeader } from "@/components/site-shell";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Nathan Mike Sidi Bakari" },
      {
        name: "description",
        content: "Reserved for genuine intersections of interest. Read before writing.",
      },
      { property: "og:title", content: "Contact — Nathan Mike Sidi Bakari" },
      {
        property: "og:description",
        content: "Reserved for genuine intersections of interest.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow="Correspondence"
        title="Contact"
        lede="This is a quiet door. Please read before writing — it makes the conversation that follows much better for both of us."
      />

      <div className="mx-auto grid max-w-[60rem] grid-cols-12 gap-x-6 gap-y-10 md:gap-x-12">
        <div className="col-span-12 md:col-span-7">
          <h2 className="font-display text-2xl text-ink mb-4">When to write</h2>
          <ul className="prose-journal">
            <li>You have read something here that connects to work you are doing.</li>
            <li>You are working on something in patient capital, quiet software, or small-press publishing, and want a thinking partner.</li>
            <li>You have a correction, a counter-argument, or a useful piece of evidence I have missed.</li>
            <li>You want to send a book, a letter, or a recording.</li>
          </ul>

          <h2 className="font-display text-2xl text-ink mt-10 mb-4">When not to write</h2>
          <ul className="prose-journal">
            <li>To pitch a service, an opportunity, or a fundraise without context.</li>
            <li>To request introductions on behalf of someone I do not know.</li>
            <li>To ask me to review your résumé, your deck, or your draft, unless we have spoken before.</li>
          </ul>

          <p className="prose-journal mt-10 italic">
            Replies are not guaranteed, and may take weeks. This is not because
            your letter is unimportant — it is because attention is finite, and
            this is one of the small rituals that keeps it possible to do any
            work at all.
          </p>
        </div>

        <aside className="col-span-12 md:col-span-5">
          <div className="border border-rule bg-paper-raised p-7">
            <p className="label-mono mb-5">Channels</p>
            <dl className="space-y-5">
              <div>
                <dt className="label-mono mb-1.5 text-ink-faint">Letter</dt>
                <dd className="font-serif text-[0.975rem] text-ink">
                  nathan [at] sidibakari [dot] com
                </dd>
              </div>
              <div>
                <dt className="label-mono mb-1.5 text-ink-faint">Newsletter</dt>
                <dd className="font-serif text-[0.975rem] text-ink">
                  The Quiet Margin · monthly
                </dd>
              </div>
              <div>
                <dt className="label-mono mb-1.5 text-ink-faint">Feed</dt>
                <dd className="font-serif text-[0.975rem]">
                  <a
                    href="/rss.xml"
                    className="text-ink underline decoration-rule-strong underline-offset-4 hover:text-accent-ink"
                  >
                    /rss.xml
                  </a>
                </dd>
              </div>
              <div>
                <dt className="label-mono mb-1.5 text-ink-faint">Public profiles</dt>
                <dd className="font-serif text-[0.975rem] text-ink">
                  Intentionally absent.
                </dd>
              </div>
            </dl>
          </div>
        </aside>
      </div>
    </SiteShell>
  );
}
