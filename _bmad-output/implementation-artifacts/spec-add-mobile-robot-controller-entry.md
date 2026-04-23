---
title: 'Add mobile robot controller entry'
type: 'feature'
created: '2026-04-23'
status: 'done'
route: 'one-shot'
---

# Add mobile robot controller entry

## Intent

**Problem:** The archive did not yet include the ENG5009 mobile robot controller work, even though the report is a strong engineering artifact worth preserving.

**Approach:** Add a marked engineering entry with the report PDF, simulator figures, English copy, and French localization. Keep the current report limitations explicit by listing stronger formal derivation and quantitative analysis as future work.

## Suggested Review Order

**Entry Data**

- Start with the new archive record and its public framing.
  [`data.ts:133`](../../src/content/data.ts#L133)

- Check the asset imports used by the report link and media gallery.
  [`data.ts:5`](../../src/content/data.ts#L5)

- Confirm the report link and simulator figures are wired into the entry.
  [`data.ts:161`](../../src/content/data.ts#L161)

**Localization**

- Review the French version for equivalent claims and future-work wording.
  [`localized.ts:47`](../../src/content/localized.ts#L47)
