import { DATA } from "@/data/resume";
import { NextResponse } from "next/server";

export async function GET() {
  const d = DATA;
  const lines: string[] = [];

  lines.push("============================================================");
  lines.push(d.name);
  lines.push(d.description);
  lines.push("Location: " + d.location);
  lines.push("Email   : " + d.contact.email);
  lines.push("Phone   : " + d.contact.tel);
  lines.push("LinkedIn: " + d.contact.social.LinkedIn.url);
  lines.push("Behance : " + d.contact.social.Behance.url);
  lines.push("GitHub  : " + d.contact.social.GitHub.url);
  lines.push("============================================================");
  lines.push("");

  lines.push("SUMMARY");
  lines.push("------------------------------------------------------------");
  lines.push(d.summary);
  lines.push("");

  lines.push("WORK EXPERIENCE");
  lines.push("------------------------------------------------------------");
  for (const w of d.work) {
    lines.push(w.company + " - " + w.title);
    lines.push(w.start + " - " + (w.end ?? "Present") + " | " + w.location);
    if (w.description) lines.push(w.description);
    if (w.description2) lines.push(w.description2);
    if (w.description4) lines.push(w.description4);
    if (w.description6) lines.push(w.description6);
    if (w.description8) lines.push(w.description8);
    if (w.description10) lines.push(w.description10);
    lines.push("");
  }

  lines.push("EDUCATION");
  lines.push("------------------------------------------------------------");
  for (const e of d.education) {
    lines.push(e.school);
    lines.push(e.degree + " | " + e.start + " - " + e.end);
    lines.push("");
  }

  lines.push("DESIGN TOOLS & SKILLS");
  lines.push("------------------------------------------------------------");
  lines.push(d.skills.map((s: { name: string }) => s.name).join(", "));
  lines.push("");

  lines.push("FRONTEND / TECHNICAL SKILLS");
  lines.push("------------------------------------------------------------");
  lines.push(d.Secskills.map((s: { name: string }) => s.name).join(", "));
  lines.push("");

  lines.push("DESIGN PROJECTS");
  lines.push("------------------------------------------------------------");
  for (const p of d.projects) {
    lines.push("- " + p.title);
    lines.push("  " + p.description);
    lines.push("  Tools: " + (p.technologies as readonly string[]).join(", "));
    const link = (p.links as { type: string; href: string }[])?.[0];
    if (link) lines.push("  Link : " + link.href);
    lines.push("");
  }

  lines.push("CODE PROJECTS");
  lines.push("------------------------------------------------------------");
  for (const p of d.Codeprojects) {
    lines.push("- " + p.title);
    lines.push("  " + p.description);
    lines.push("  Tools: " + (p.technologies as readonly string[]).join(", "));
    const typedLinks = p.links as { type: string; href: string }[];
    const liveLink = typedLinks?.find((l) => l.type === "Website");
    const srcLink = typedLinks?.find((l) => l.type === "Source");
    if (liveLink) lines.push("  Live  : " + liveLink.href);
    if (srcLink) lines.push("  Source: " + srcLink.href);
    lines.push("");
  }

  lines.push("============================================================");
  lines.push("Portfolio: " + d.url);
  lines.push("============================================================");

  const fileContent = lines.join("\n");

  return new NextResponse(fileContent, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Content-Disposition": 'attachment; filename="VIKASHINI_Resume.txt"',
    },
  });
}