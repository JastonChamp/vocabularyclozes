# Performance & Launch Checklist

## Lighthouse targets
- Performance: **95+**
- Accessibility: **100**
- Best Practices: **100**
- SEO: **100**
- PWA: Installable + offline-ready for cloze + review screens

## Checklist
- [ ] Route-level code splitting for Dashboard/Onboarding/SmartTutor modal
- [ ] Lazy-load optional local AI bundles only when Advanced Mode is enabled
- [ ] Cache cloze JSON + vocabulary metadata in service worker
- [ ] Preload critical fonts and avoid layout shifts
- [ ] Enable image/icon compression and immutable cache headers
- [ ] Audit keyboard navigation for all interactive controls
- [ ] Ensure dyslexia font toggle and text-size slider remain globally available
- [ ] Add aria-live regions for answer feedback and tutor responses
- [ ] Use reduced-motion preferences to tone down animations if requested

## Landing/SEO assets
- Dedicated landing page (`src/landing/LandingPage.tsx`)
- Meta tags: title, description, OG, Twitter card, canonical URL
- Blog seed content: "PSLE Context Cloze Tips"
- Shareable progress cards (WhatsApp/Instagram-ready image templates)
