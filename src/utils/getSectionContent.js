export default function getSectionContent(text, title) {
  const lines = text ? text.split("\n") : [];

  const line = lines.find((l) => l.startsWith(title));
  return line ? line.replace(`${title}:`, "").trim() : "";
};
