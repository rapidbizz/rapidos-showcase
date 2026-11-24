// Demo example — a small mission plan in plain JavaScript.
// Illustrative example only, not product code.

const MISSION_STEPS = [
  { step: "Audit website", done: true },
  { step: "Score leads", done: true },
  { step: "Plan outreach", done: false },
  { step: "Send follow-ups", done: false },
];

function missionProgress(steps) {
  const done = steps.filter((s) => s.done).length;
  return Math.round((done / steps.length) * 100);
}

function nextStep(steps) {
  return steps.find((s) => !s.done)?.step ?? "Mission complete";
}

module.exports = { MISSION_STEPS, missionProgress, nextStep };
