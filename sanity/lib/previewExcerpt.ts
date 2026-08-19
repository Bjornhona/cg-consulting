/**
 * Trims a plain-text field down to a single-line preview subtitle.
 * Returns undefined for empty or non-string values so Studio falls back cleanly.
 */
export function excerpt(value: unknown, maxLength = 60): string | undefined {
  if (typeof value !== "string") return undefined;

  const collapsed = value.replace(/\s+/g, " ").trim();
  if (!collapsed) return undefined;

  return collapsed.length > maxLength
    ? `${collapsed.slice(0, maxLength).trimEnd()}…`
    : collapsed;
}

/** Pluralises a count for preview subtitles, e.g. "3 cards" / "1 card". */
export function countLabel(
  value: unknown,
  singular: string,
  plural = `${singular}s`
): string {
  const count = Array.isArray(value) ? value.length : 0;
  return `${count} ${count === 1 ? singular : plural}`;
}
