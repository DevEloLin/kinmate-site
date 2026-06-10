# Releases-only branch (DO NOT EDIT)

This orphan branch exists **only to anchor GitHub Release tags** so that
GitHub's auto-generated "Source code (zip)" / "Source code (tar.gz)"
archives on each release contain **only this README** — no app source
code, no landing-page source, no configuration files.

## Why

GitHub auto-attaches source archives to every release that's tied to a
tag. The archives are zipped from the tag's target commit. If tags target
`main`, the archives include the entire landing-page source. This is a
hygiene concern: users see "Source code" links next to the APK in the
release UI and might be confused, or download the wrong artifact.

By targeting tags at this `releases` branch instead, the archives only
contain this README — no real source.

## What

Real distribution artifacts (Android APK, eventually iOS IPA) are
uploaded as **explicit release assets** via `gh release create` /
`gh release upload` from the applabs CI workflow at
`.github/workflows/release-android.yml`.

## Don't edit

This branch is bootstrapped + maintained by CI. Do not commit anything
else here.

See: <https://github.com/DevEloLin/applabs/blob/main/.github/workflows/release-android.yml>
