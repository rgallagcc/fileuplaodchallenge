// Flags storage and scoring
const FLAGS = {
  nonImage:       { id: "FLAG-01", points: 10, earned: false, hint: "Uploaded a non-image file." },
  blockedExt:     { id: "FLAG-02", points: 15, earned: false, hint: "Triggered blacklist extension filter." },
  doubleExt:      { id: "FLAG-03", points: 20, earned: false, hint: "Attempted double extension upload." },
  legitImage:     { id: "FLAG-04", points: 5,  earned: false, hint: "Successfully uploaded a valid image." }
};

let totalScore = 0;

function awardFlag(flagName) {
  const flag = FLAGS[flagName];
  if (!flag || flag.earned) return;

  flag.earned = true;
  totalScore += flag.points;

  const list = document.getElementById("flagList");
  const item = document.createElement("li");
  item.textContent = `${flag.id} — ${flag.hint} (+${flag.points})`;
  list.appendChild(item);

  document.getElementById("score").textContent = totalScore;
}
