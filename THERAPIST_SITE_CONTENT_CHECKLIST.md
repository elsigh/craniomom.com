# Therapist website content checklist

Use this checklist to collect everything needed to create a second website with
the same routes, layout, and interactions as CranioMom. Please return the copy
as plain text under the matching headings and attach the original, full-size
image files separately (not screenshots or images pasted into a document).

## 1. Brand and site-wide details

- [ ] Practice/site name
- [ ] Therapist's full name, pronouns, credentials, licenses, and certification abbreviations exactly as they should appear
- [ ] One-sentence positioning statement (who you help, what you offer, and where)
- [ ] Primary city/region and whether sessions are in-person, virtual, or both
- [ ] Public email address
- [ ] Booking URL (Cal.com, SimplePractice, Calendly, etc.)
- [ ] Primary domain name
- [ ] Business/legal name for the footer and email sender
- [ ] Header button label (currently “Contact”)
- [ ] Main call-to-action label (currently “Book a Session”)
- [ ] Navigation labels; the existing structure is Home, About, and Contact / FAQ
- [ ] Logo preference: keep the current abstract mark, supply an SVG logo, or request a new wordmark/mark
- [ ] Brand colors or a note to keep the existing black, white, and neutral palette
- [ ] Any required professional-license, accessibility, privacy, telehealth, or jurisdiction disclaimer

## 2. Photos and graphics

Supply JPG, PNG, or WebP originals in sRGB. JPG/WebP is best for photos; SVG is
best for a logo. Leave room around faces and hands so responsive crops work.
Do not add text to the photos.

| Used on                          | Asset                                   | Replacement target                                           | Composition notes                                                                                                                                                                       |
| -------------------------------- | --------------------------------------- | ------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/`                              | Hero portrait (`new-baby.jpg`)          | 2000 × 1900 px, landscape-near-square (minimum 1600 px wide) | The visible mask is about 719:680. Keep the subject near the center and away from the outer 15% because the decorative shape clips the edges. Current source: 1598 × 1600.              |
| `/`                              | Secondary portrait (`baby-flowers.jpg`) | 1400 × 1960 px, 5:7 portrait                                 | Full image is shown at about 600 px wide. Keep the main subject centered with comfortable space above and below. Current source: 1028 × 1440.                                           |
| `/about`                         | Biography photo (`mom-and-baby.jpg`)    | 2000 × 1428 px, 7:5 landscape                                | Shown up to 600 px wide and floated beside the biography on desktop. Put the person slightly right of center if the gaze/action points left into the copy. Current source: 1440 × 1028. |
| `/contact`                       | Contact portrait (`mom-to-be.jpg`)      | 1600 × 1812 px, roughly 8:9 portrait                         | Shown in a narrow 340 px desktop column. Use a simple background and keep the subject centered for narrow crops. Current source: 1642 × 1860.                                           |
| All shared links/social previews | Open Graph image                        | Exactly 1200 × 630 px                                        | Include practice name, short descriptor, and a high-contrast safe area. Keep important content at least 60 px from every edge.                                                          |
| Browser/bookmarks                | Favicon source                          | 512 × 512 px square PNG with transparency, or SVG            | Must remain recognizable at 16–48 px. The current compiled favicon is 48 × 48.                                                                                                          |

No page image is required for `/contact/thanks` or the 404 page. The existing
`tummy-time.jpg` file is unused and does not need a replacement.

For every supplied photo, also provide:

- [ ] Photographer/source and confirmation that the practice may publish it
- [ ] Names of people shown and any required consent/model release
- [ ] A one-sentence factual description for accessible alt text
- [ ] Preferred crop/focal point and anything that must not be cropped

## 3. `/` — Home page copy

- [ ] Browser/search description: one sentence, ideally 140–160 characters
- [ ] Hero headline: one short sentence, ideally 4–10 words
- [ ] Intro paragraph 1: concise professional summary, about 20–45 words
- [ ] Intro paragraph 2: approach/philosophy, about 20–50 words
- [ ] Large highlighted statement: one explanation, philosophy statement, or short testimonial, about 25–55 words
- [ ] If the highlighted statement is a testimonial: client attribution and explicit permission to publish it (anonymous attribution is fine)
- [ ] Bottom call-to-action headline: one sentence inviting the visitor to work together
- [ ] Confirm the bottom button label and destination
- [ ] In-office service card: heading, practice/facility name, facility URL, street address/map URL, session price, and any short qualifier
- [ ] Second service card: heading plus location/mode, eligibility, price, and any travel or service-area qualification

## 4. `/about` — About page copy

- [ ] Browser/search description: one sentence, ideally 140–160 characters
- [ ] Page eyebrow (currently “About”)
- [ ] Page title (usually the therapist's name)
- [ ] Opening paragraph, about 20–50 words
- [ ] Optional second opening line or milestone
- [ ] Biography in 3–6 paragraphs; include the path into the work, experience, therapeutic approach, who you serve, and why the work matters
- [ ] Education-section eyebrow (currently “Education”)
- [ ] Education-section title (currently “Classes & Training”)
- [ ] Education-section introduction, about 25–60 words
- [ ] Training/credential items in display order. For each item provide:
  - [ ] Short title or credential abbreviation
  - [ ] Full course/certification name
  - [ ] Instructor and institution
  - [ ] Completion month/year (or date range)
  - [ ] Optional one-sentence description if the title is not self-explanatory
- [ ] Confirm which credentials are active/current and exactly how regulated titles may be presented in the therapist's jurisdiction

## 5. `/contact` — Contact, booking, and FAQ copy

- [ ] Browser/search description: one sentence, ideally 140–160 characters
- [ ] Page title (currently “Let’s work together”)
- [ ] One-sentence welcome beneath the title
- [ ] Booking button label and external booking URL
- [ ] Contact-form heading (currently “Contact Angela”)
- [ ] Public contact email shown on the page and in the FAQ introduction
- [ ] Decide whether the form keeps these required fields: name, email, phone, and message
- [ ] Add a short instruction not to submit confidential health information, if required by the practice's privacy/compliance policy
- [ ] Thank-you page sentence (for example, “Your message has been sent to [name].”)
- [ ] FAQ questions and answers in desired order. Suggested topics:
  - [ ] What the therapy is and who it helps
  - [ ] Therapist's scope of practice and what the service does not replace
  - [ ] Session length, format, and what to expect
  - [ ] In-person and/or telehealth locations
  - [ ] Fees, deposits, cancellation policy, and payment methods
  - [ ] Insurance, superbills, HSA/FSA, or sliding-scale availability
  - [ ] New-client requirements and intake forms
  - [ ] Accessibility and accommodation requests
  - [ ] Frequency of sessions or how treatment planning works
  - [ ] Current illness/rescheduling policy, if relevant
  - [ ] Any other common concern that should be answered before booking

## 6. Contact-form and service setup (owner/developer handoff)

These are operational details; send them securely rather than in the content document.

- [ ] Destination inbox for form submissions
- [ ] Verified sending domain and sender address for Resend
- [ ] Resend API key added to the new deployment
- [ ] Decision on email validation provider; the current site uses Emailable
- [ ] Emailable API key added if that validation remains enabled
- [ ] Bot protection configured for the new domain and contact form
- [ ] Booking account/slug configured and tested
- [ ] Office/facility links and map links tested
- [ ] New Vercel project, analytics, speed insights, environment variables, and production domain configured
- [ ] Submit a real test message and verify delivery, error handling, bot protection, and the `/contact/thanks` redirect

## 7. Final review before launch

- [ ] Therapist approves every page, credential, price, address, and policy
- [ ] Therapist approves every photo, crop, caption/alt description, and testimonial
- [ ] Mobile and desktop layouts are reviewed
- [ ] All navigation, booking, map, email, and form links are tested
- [ ] Search titles/descriptions, favicon, and the 1200 × 630 social preview are verified
- [ ] Domain, HTTPS, analytics, and form delivery are verified in production
- [ ] Old person's name, brand, domain, email, booking slug, locations, pricing, and metadata no longer appear anywhere
