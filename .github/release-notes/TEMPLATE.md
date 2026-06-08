# Release Notes Template

<!--
  Voice rule (important): release notes here are PRODUCT communication,
  not a developer changelog. They are read by potential users on
  GitHub Releases, sometimes copy-pasted into App Store / Play Store
  release-notes fields, and sometimes embedded directly on the site.

  Never lead with "What's New / Changed / Fixed" bullets — that reads
  like an internal sprint summary. Lead with a story: who this release
  is for, what specific moment in their family's life it makes easier,
  what they can do today that they couldn't yesterday.

  Engineering changelog (RPC counts, migration steps, EF rebuilds)
  belongs under docs/kinmate/<version>/, not here.
-->

# KinMate vX.Y.Z — One-line theme

## Release Date

`YYYY-MM-DD`

## Summary

One short paragraph in plain language — who this release is for and
what changes for them. Two or three sentences max. Speak to the
reader directly ("you", "your family") rather than "the user".

## Who this release is for

One or two sentences naming the real-life person this version helps
most clearly. Be specific (e.g. "the diaspora child managing parents'
health from another time zone") instead of generic ("family users").

## What you can do now

3–6 short paragraphs, one per capability you want a user to take
away. Each begins with a verb and ends with the moment the user will
feel it. Avoid screenshots of dashboards; describe the situation,
then the action.

## What's new in this release

Grouped by theme (e.g. "Health Intelligence", "Family & sharing",
"Privacy"). For each item, write 2–4 sentences:
1. The situation that called for it.
2. What the feature actually does.
3. The boundary — what it doesn't do (e.g. "never a diagnosis").

## Plans and pricing

Only include this section if pricing changed.
- New tiers added / removed.
- Promo windows opening or closing.
- What happens to users already on the previous pricing.

## Privacy and data

Always include. Even if nothing changed, state the posture briefly
(local-first, BYOC, E2E encrypted, zero analytics). Trust is a
recurring promise, not a launch-only claim.

## How to install

State current store availability. If a store is still under review,
say so explicitly and direct readers to the alternative install path
(signed APK, TestFlight, etc).

- iOS — [status: live / under review / pending]
- Android — [status: live / under review / pending]
- Android signed APK — [link / N/A]

## Compatibility

OS minimums, supported languages.

## Notes for operators

Internal-facing footnotes — rollout caveats, dependency on app
release, what needs to flip on App Store Connect / Play Console,
which i18n keys can be removed once a promo ends, etc. This is the
only section where a developer voice is okay.

## What's coming next

Optional. One or two bullets pointing at the next release's theme,
without committing dates.
