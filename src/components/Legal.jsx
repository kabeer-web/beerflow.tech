import { company } from "../data/company";

const docs = {
  "/privacy": {
    h1: "Privacy Policy",
    updated: "November 2026",
    sections: [
      ["What we collect", "This website does not have user accounts. If you contact us by WhatsApp or email, we receive the details you choose to send (such as your name, phone number and project requirements)."],
      ["Analytics", "We use Google Tag Manager to understand how visitors use the site (pages viewed, device type, approximate location). This data is used only to improve the website."],
      ["How we use your details", "We use the information you send only to reply to your enquiry and to discuss or deliver a project. We do not sell your information."],
      ["Third parties", "Messages sent through WhatsApp or email are handled by those services under their own policies. The site loads fonts from Google Fonts."],
      ["Your choices", `You can ask us to delete the enquiry details we hold by emailing ${company.email}.`],
    ],
  },
  "/terms": {
    h1: "Terms and Conditions",
    updated: "November 2026",
    sections: [
      ["Use of this website", "The content on this website describes the services of BeerFlow Technologies and is provided for general information. Please do not copy our text, designs or screenshots without permission."],
      ["Projects", "Scope, price, timeline and payment terms for any website or software project are agreed with you in writing before work starts. A message on this website or WhatsApp is not a binding contract by itself."],
      ["Demos and screenshots", "Demos and screenshots show real systems we have built. A system built for you is adapted to your business and may differ."],
      ["Changes", "We may update these terms and the website from time to time."],
      ["Contact", `Questions about these terms: ${company.email} or WhatsApp ${company.whatsappDisplay}.`],
    ],
  },
};

export default function Legal({ path }) {
  const d = docs[path];
  return (
    <article className="mx-auto max-w-3xl px-4 sm:px-6 py-16 sm:py-24">
      <h1 className="text-4xl font-bold tracking-tight">{d.h1}</h1>
      <p className="mt-3 text-sm text-zinc-500">Last updated: {d.updated}</p>
      {d.sections.map(([t, p]) => (
        <section key={t} className="mt-8">
          <h2 className="text-xl font-semibold text-white">{t}</h2>
          <p className="mt-2 text-zinc-400 leading-relaxed">{p}</p>
        </section>
      ))}
    </article>
  );
}
