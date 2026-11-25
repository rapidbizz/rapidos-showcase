// Demo example — a small growth dashboard model in TypeScript.
// Illustrative example only, not product code.

export interface AuditFinding {
  page: string;
  issue: string;
  severity: "low" | "medium" | "high";
}

export interface Lead {
  company: string;
  websiteScore: number; // 0-100
  contacted: boolean;
}

export interface Mission {
  title: string;
  stepsDone: number;
  stepsTotal: number;
}

export const SAMPLE_FINDINGS: AuditFinding[] = [
  { page: "/", issue: "Missing meta description", severity: "medium" },
  { page: "/pricing", issue: "Slow image (1.8 MB)", severity: "high" },
  { page: "/contact", issue: "Form has no confirmation message", severity: "low" },
  { page: "/blog", issue: "3 broken links", severity: "medium" },
];

export const SAMPLE_LEADS: Lead[] = [
  { company: "Marina Tours", websiteScore: 82, contacted: true },
  { company: "Desert Rose Trading", websiteScore: 64, contacted: false },
  { company: "Blue Wave Logistics", websiteScore: 45, contacted: false },
  { company: "Palm Hotels", websiteScore: 91, contacted: true },
];

/** Average website score across audited leads. */
export function averageScore(leads: Lead[]): number {
  if (leads.length === 0) return 0;
  const total = leads.reduce((sum, l) => sum + l.websiteScore, 0);
  return Math.round(total / leads.length);
}

/** High-severity findings first. */
export function urgentFindings(findings: AuditFinding[]): AuditFinding[] {
  return findings.filter((f) => f.severity === "high");
}

/** Leads worth contacting next: lowest score first, uncontacted only. */
export function nextLeads(leads: Lead[]): Lead[] {
  return leads
    .filter((l) => !l.contacted)
    .sort((a, b) => a.websiteScore - b.websiteScore);
}

/** Mission progress as a percentage. */
export function missionProgress(mission: Mission): number {
  if (mission.stepsTotal === 0) return 0;
  return Math.round((mission.stepsDone / mission.stepsTotal) * 100);
}
