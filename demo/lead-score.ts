// Demo example — a small lead-scoring function in TypeScript.
// Illustrative example only, not product code.

export interface Lead {
  name: string;
  websiteHealth: number; // 0-100 from an audit
  replied: boolean;
  budgetKnown: boolean;
}

export type LeadGrade = "hot" | "warm" | "cold";

/** Score a lead the way the demo teaches: audit health + engagement. */
export function scoreLead(lead: Lead): number {
  let score = lead.websiteHealth * 0.5;
  if (lead.replied) score += 30;
  if (lead.budgetKnown) score += 20;
  return Math.min(100, Math.round(score));
}

export function gradeLead(lead: Lead): LeadGrade {
  const score = scoreLead(lead);
  return score >= 70 ? "hot" : score >= 40 ? "warm" : "cold";
}
