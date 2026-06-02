# CSS Ownership TODO

Current audit baseline:

- Duplicate selectors: 14
- Starting point: 146
- Reduction: ~90.4%
- Build status: passing

## Shared Component Ownership

These selectors are shared between `cards.css` and `home.css`. Decide whether the shared/base version belongs in `cards.css` or whether the homepage-specific version should stay in `home.css`.

- `.story-card > p:not(.story-card-statement)`
  - `src/styles/cards.css`
  - `src/styles/home.css`

- `.story-card-statement`
  - `src/styles/cards.css`
  - `src/styles/home.css`

- `.split-identity-section`
  - `src/styles/cards.css`
  - `src/styles/home.css`

## AskDaFT Request / Card Ownership

These overlap between request-specific styles and shared card styles. Decide whether summary-note/subscription-note styling should live in AskDaFT request styles or shared card styles.

- `.askdaft-summary-note`
  - `src/styles/askdaft-request.css`
  - `src/styles/cards.css`

- `.askdaft-subscribe-note`
  - `src/styles/cards.css`

## Page / Frontdoor Ownership

These overlap between general page styles and AskDaFT frontdoor-specific styles. Decide whether the base belongs in `pages.css` and the page-specific enhancements belong in `askdaft-frontdoor.css`.

- `.askdaft-page`
  - `src/styles/pages.css`
  - `src/styles/askdaft-frontdoor.css`

- `.askdaft-hero h1`
  - `src/styles/pages.css`
  - `src/styles/askdaft-frontdoor.css`

## Local Page Cleanup Candidate

This one is still local to `pages.css` and can likely be scoped or merged later.

- `.contact-section`
  - `src/styles/pages.css`

## CTA / Pricing Ownership

These appear shared between `cta.css` and `pricing.css`. Decide whether pricing should reuse CTA classes intentionally or whether pricing should get pricing-specific class names.

- `.mode-cta-copy h2`
  - `src/styles/cta.css`
  - `src/styles/pricing.css`

- `.mode-cta-lead-stack > span:first-child`
  - `src/styles/cta.css`
  - `src/styles/pricing.css`

## Remaining Cross-File / Responsive Overrides

These should probably be left alone or added to the intentional duplicate allowlist after review.

- `.recent-request-list div`
  - `src/styles/account.css`
  - `src/styles/askdaft-dashboard.css`

- `.game-start-screen .mobile-hero-ambience`
  - `src/styles/hero.css`
  - `src/styles/mobile.css`

## Next Refactor Rule

Do not fix the remaining duplicates with blind `body` scoping.

For each remaining duplicate:
1. Decide the owner file.
2. Move shared/base styles into the owner file.
3. Keep only page-specific overrides in page-specific files.
4. Add intentional responsive overrides to `INTENTIONAL_DUPLICATE_SELECTORS` only after review.
