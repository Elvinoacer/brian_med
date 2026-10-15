# Brian Kiptoo — Medicine, with the person in view

## Complete portfolio content and creative build specification

**Discipline:** Bachelor of Medicine and Bachelor of Surgery (MBChB)  
**Institution:** Moi University · College of Health Sciences · School of Medicine  
**Audience:** Clinical mentors, research supervisors, internship programme teams, scholarship committees and community health collaborators  
**Creative direction:** Contemporary medical editorial, Kenyan context, human warmth  
**Document date:** 11 October 2026

### How to use this document

This is a complete website brief with finished example copy, visual specifications, interactions and implementation requirements. Build from the content here rather than filling the website with generic paragraphs or empty template fields.

The student name **Brian Kiptoo** is an illustrative identity, not an identified or verified Moi student. His first-person voice, interests and personal narrative are authored examples for replacement with the actual student's account. The user has confirmed only that the intended owner is a male Medicine and Surgery student at Moi University CHS approaching graduation. Exact study year, graduation date, clinical placements, projects, certificates, awards and contact details have not been supplied.

Institutional facts are sourced in Section 22. Research and outreach entries below are explicitly **proposed concepts**, not invented completed achievements. Keep these labels until the student supplies evidence of actual work. This provides substantial, usable content without manufacturing a publication record or professional credentials.

---

## 1. The portfolio's central idea

### Medicine, with the person in view.

Build a portfolio that feels like meeting a thoughtful emerging clinician: observant, grounded, intellectually curious and interested in the life surrounding a patient's illness.

The visual story moves through three scales:

1. **The person:** A portrait, a clear introduction, a voice and a reason for studying medicine.
2. **The practice:** Clinical learning, careful observation, teamwork and developing judgement.
3. **The community:** Questions about access, communication, prevention and continuity of care.

Its purpose is to make a reader understand who the student is, what he is learning, how he thinks and where he would contribute next.

The distinctive detail is a **continuous observation line**: a thin teal stroke that appears in selected section headers, research diagrams and the journey timeline. It represents attention connecting learning to people. It is an editorial motif, never a simulated diagnostic monitor.

### Immediate impression

Within the first screen, visitors should know:

- This is an MBChB student approaching graduation at Moi University CHS.
- His example interests are clinical reasoning, community health and patient communication.
- They can explore his thinking, read selected work and contact him professionally.

The page should feel closer to a beautifully designed clinical journal than a hospital booking website.

---

## 2. Positioning and voice

### Primary identity line

**Brian Kiptoo**  
**MBChB student approaching graduation**  
Moi University · College of Health Sciences · School of Medicine

Use the student's current status consistently. Do not prepend “Dr.”, display MBChB as an awarded qualification, or imply independent clinical practice before those facts are confirmed.

### One-sentence positioning

> An emerging clinician interested in the intersection of careful clinical reasoning, clear communication and care that remains practical beyond the hospital.

### Three editorial pillars

| Pillar | Message | Evidence the live portfolio should connect to it |
| --- | --- | --- |
| Clinical curiosity | I want to understand the reasoning behind a decision. | Approved learning reflections, presentations and supervised experience descriptions. |
| Human attention | A patient's understanding matters alongside the clinical plan. | Communication projects, reflective writing and genuine community involvement. |
| Community perspective | Care happens within families, routines and resources. | Verified community learning, research interests and documented outreach work. |

### Tone rules

Write in first person. Use short, concrete sentences. Make the student sound reflective and capable without presenting him as a specialist.

Use phrases such as “I am developing”, “I am interested in”, “I learned to ask” and “under supervision” when accurate. Avoid “world-class doctor”, “transforming healthcare”, “saving thousands of lives”, “expert surgeon”, “100% patient satisfaction” and “passionate visionary”.

The writing should show maturity through specificity, not through inflated titles.

---

## 3. Site structure and navigation

### Main page order

| Order | Section label | Heading | Why it is here |
| --- | --- | --- | --- |
| 01 | Introduction | Medicine, with the person in view. | Establish identity and invite exploration. |
| 02 | My perspective | Learning the science. Understanding the person. | Show personal motivation and values. |
| 03 | Clinical learning | Where knowledge becomes judgement. | Explain areas of developing clinical interest. |
| 04 | Selected work | Questions worth following. | Show meaningful project thinking and evidence when available. |
| 05 | Community | Care continues beyond the consultation. | Connect the portfolio to community realities. |
| 06 | My journey | From foundations to the next chapter. | Make academic progression readable. |
| 07 | Field notes | What I am learning to notice. | Give the student a distinctive intellectual voice. |
| 08 | Professional profile | A clear view of my direction. | Provide a concise, scannable summary. |
| 09 | Contact | A conversation could be the next step. | Convert interest into professional contact. |

### Desktop navigation

Left: custom **BK** monogram and “Brian Kiptoo”.

Centre: **About · Clinical learning · Selected work · Notes**.

Right: **Get in touch** in a compact outline button.

Navigation height: 76 px. Make it sticky with an opaque warm-paper surface after the hero enters the scroll position. Use a fine divider and a small shadow only when necessary for separation.

### Mobile navigation

Use the monogram, a visible “Contact” link and a labelled menu button. The menu opens a simple full-width panel below the header. Include all nine sections, with touch targets at least 44 × 44 px. Close after selection, support Escape and restore focus to the menu button.

### Detail routes

- `/work/clearer-discharge-conversations`
- `/work/continuity-of-care`
- `/work/clinical-learning-notebook`
- `/notes/listening-before-concluding`
- `/notes/plain-language-is-clinical-work`
- `/notes/context-travels-home`

These are full pages with stable URLs, browser back behaviour, metadata and an easy return to the portfolio. Optional overlays may enhance desktop previews, but the full text must remain accessible through the routes.

---

## 4. Visual identity: The Observant Clinician

### Colour system

| Token | Value | Intended use |
| --- | --- | --- |
| Paper | `#F6F3EC` | Main page background. |
| White | `#FFFFFF` | Reading surfaces and selected document previews. |
| Ink | `#132E2C` | Main headings and body text. |
| Muted ink | `#4D625E` | Supporting text. |
| Deep teal | `#124C46` | Primary buttons, strong accents and dark section. |
| Teal mist | `#E2ECE7` | Quiet panels and clinical learning backgrounds. |
| Clay | `#9B4D36` | Small editorial accents and project numbers. |
| Warm line | `#D7DCD2` | Borders and separators. |
| Highlight | `#EBCB78` | Small decorative emphasis, never ordinary text on paper. |

Paper is the dominant surface. Use one deep-teal community section to change the rhythm, then return to paper. Avoid assigning a new saturated colour to every section.

Confirm final text, border and focus contrast in the implemented combinations. Muted colours must remain readable; decorative colours do not automatically qualify as accessible text colours.

### Typography

Use **DM Sans** for navigation, body copy and interface labels. Use **Instrument Serif** for major editorial headings and occasional short statements. Self-host the approved font files where possible and verify their licences.

| Element | Desktop | Mobile | Treatment |
| --- | --- | --- | --- |
| Hero heading | 80–96 px | 44–54 px | Serif, regular weight, tight but readable line height. |
| Section heading | 46–58 px | 32–38 px | Serif, sentence case. |
| Card heading | 23–28 px | 22–25 px | Sans, medium weight. |
| Main body | 18 px | 17 px | Line height 1.65–1.75. |
| Metadata | 13–14 px | 13–14 px | Sans, moderate letter spacing. |
| Article body | 19 px | 17–18 px | Maximum width approximately 68 characters. |

The serif is for emotional emphasis. Long passages should use the sans-serif family. Do not set every label in all caps.

### Layout

- Maximum content width: 1,240 px.
- Desktop grid: 12 columns with 24 px gaps.
- Desktop outer padding: 48–64 px; tablet: 32 px; mobile: 20–24 px.
- Section spacing: 104–128 px desktop; 64–80 px mobile.
- Card radius: 16–20 px. Reserve larger rounding for portrait compositions.
- Use borders, surface contrast and spacing before adding shadows.
- Preserve a text-led section between image-heavy areas so the page can breathe.

### Signature graphics

1. **Observation line:** A thin, locally bounded SVG path used in three or four places. It never snakes continuously behind paragraphs.
2. **Anatomical plate:** A subtle, reviewed line illustration of the thorax, lungs and heart region behind the hero portrait. Keep it abstract enough to function decoratively; do not label it as an accurate educational diagram without review.
3. **Research margin:** Project layouts use numbered evidence headings, thin rules and generous margins inspired by journal annotation.
4. **Community contour:** A soft vector contour pattern around the community introduction. It suggests terrain and distance without pretending to map a real placement.
5. **Field-note underline:** A short hand-drawn accent on one key phrase per article card. Keep the effect consistent and sparse.

Avoid caduceus clip art, floating pills, spinning DNA, glowing brains and red emergency crosses. A considered portrait and a precise line system will be more memorable.

---

## 5. Hero: finished copy and composition

### On-screen copy

**Eyebrow**  
MOI UNIVERSITY · COLLEGE OF HEALTH SCIENCES

**Name**  
Brian Kiptoo

**Headline**  
Medicine, with the person in view.

**Introduction**  
I am an MBChB student approaching graduation at Moi University. I am developing my clinical judgement with a growing interest in community health, thoughtful communication and the everyday realities that shape care.

**Primary action:** Explore my work  
**Secondary action:** Get in touch

**Identity strip**  
School of Medicine · Eldoret, Kenya · Preparing for the next stage of clinical training

**Portrait annotation**  
Learning to observe carefully. Learning to explain clearly.

### Composition

The hero occupies approximately 85% of the first desktop viewport without clipping content on shorter screens. Use a 7-column text area and a 5-column portrait area. The headline gets the greatest visual weight; the name is large enough to remember but does not compete with it.

Place the portrait in an offset rounded rectangle over a pale green surface. A small paper-coloured annotation panel touches its lower corner. A tiny clay dot anchors the observation line on the outer edge.

The portrait should feel editorial: an actual image of the student, naturally lit, facing the camera with a relaxed expression. Prefer a neutral shirt or authentic training attire. Clothing and setting must match his real status.

Use an anatomical line layer at low opacity behind the portrait, not over the face. Keep it outside the text area. The background is otherwise still.

### Mobile arrangement

Eyebrow → name → headline → introduction → actions → portrait → identity strip.

Use a portrait crop around 4:5 and show the face without aggressive clipping. The annotation becomes an ordinary caption. Buttons can sit side by side at comfortable widths, stacking when text enlargement requires it.

### Intro animation

On first load, reveal the eyebrow, name, headline, body and actions in that order. Use opacity and a 10–14 px upward movement, 80 ms stagger and 450–650 ms durations. Reveal the portrait with an opacity change and a maximum scale change from 1.015 to 1. Draw the observation line once over 800 ms.

Render the text immediately in the HTML. Animation must never delay access, hide the page if JavaScript fails, or create an opening splash screen.

---

## 6. About: a personal statement with substance

### Section copy

**Eyebrow:** My perspective

**Heading:** Learning the science. Understanding the person.

**Body:**

> Medicine asks me to work at two levels at once: to understand what may be happening in the body, and to understand what that experience means to the person in front of me.
>
> As I approach the end of my undergraduate training, I am interested in becoming a clinician who can think carefully, communicate honestly and recognise the limits of my own knowledge. I want to bring useful questions to a team, learn from feedback and make space for the patient's own account.
>
> My developing interests lie in clinical reasoning, continuity of care and community health. I am especially drawn to the point where a clinical plan meets everyday life: how someone understands an explanation, how they return for follow-up, and what may make the next step difficult.
>
> I see this portfolio as a record of that development: the questions I am pursuing, the work I am building and the habits I want to carry into the next stage of training.

### Short statement in the margin

> A good question can change what you notice next.

This is original portfolio copy, not a quotation attributed to a medical authority.

### Three compact value entries

**Listen before narrowing**  
Make room for the patient's words before turning their experience into a clinical summary.

**Explain with care**  
Choose language someone can understand and leave room for questions.

**Keep learning visible**  
Reflect on uncertainty, seek feedback and be honest about developing skills.

### Layout

Use a narrow left column for the eyebrow and margin statement; place the longer narrative in the right column. Follow it with three flat value entries separated by thin rules. Avoid wrapping every paragraph in a card.

On mobile, use one column and put the margin statement after the main narrative. Keep the body readable without forcing horizontal scrolling.

---

## 7. Clinical learning: six areas with meaningful content

### Section introduction

**Heading:** Where knowledge becomes judgement.

**Body:**  
I am interested in the habits that make clinical learning useful: collecting a clear history, noticing relevant findings, organising possibilities and communicating a reasoned assessment under supervision.

**Section label:** Areas of developing interest

These entries express example interests. They are not a verified rotation log, proof of competency or a claim that the student has completed every listed placement.

### 01 — Internal medicine

**Card line:** Seeing the pattern without losing the person.

**Expanded copy:**  
I am drawn to the reasoning involved in bringing symptoms, examination findings and investigations into a coherent assessment. My learning focus is on presenting information clearly, considering alternatives and understanding how long-term illness affects everyday routines.

**Learning themes:** History synthesis · Differential reasoning · Continuity of care

**Reflection prompt:** What information would change the way I frame this problem?

### 02 — Surgery

**Card line:** Precision begins before the procedure.

**Expanded copy:**  
My interest in surgery includes the assessment, communication and teamwork surrounding an operation. I want to better understand how teams prepare patients, discuss uncertainty and follow recovery, while developing appropriate skills within supervised training.

**Learning themes:** Surgical assessment · Team communication · Perioperative learning

**Reflection prompt:** How does each part of the pathway prepare the next person to act safely?

### 03 — Paediatrics and child health

**Card line:** Understanding the child within the family.

**Expanded copy:**  
Child health challenges me to adapt how I observe, communicate and learn. I am interested in making explanations accessible to caregivers and understanding the family circumstances that shape a child's care.

**Learning themes:** Family communication · Growth and development · Prevention

**Reflection prompt:** What would help this caregiver feel informed and able to ask questions?

### 04 — Obstetrics and gynaecology

**Card line:** Clinical attention, dignity and trust.

**Expanded copy:**  
I am interested in the relationship between attentive clinical assessment and respectful communication in reproductive health. My learning emphasis is on privacy, informed discussion and understanding care within a wider family and community context.

**Learning themes:** Respectful care · Maternal health learning · Sensitive communication

**Reflection prompt:** Have I made the conversation understandable, private and respectful?

### 05 — Mental health

**Card line:** Making room for what is difficult to say.

**Expanded copy:**  
Mental health learning reminds me that pace, language and listening can shape what someone feels able to share. I am interested in reducing judgement in clinical conversations and appreciating the relationship between psychological wellbeing and physical health.

**Learning themes:** Listening · Person-centred interviewing · Whole-person perspective

**Reflection prompt:** What assumptions might be narrowing my understanding of this person's experience?

### 06 — Community health

**Card line:** Understanding the life around the illness.

**Expanded copy:**  
I want to understand how distance, costs, work, family support and health information influence access to care. Community health interests me because it connects clinical learning with prevention, service design and the conditions people live within.

**Learning themes:** Access to care · Health communication · Community perspective

**Reflection prompt:** What might make the recommended next step difficult outside this setting?

### Card design and interaction

Use a 3 × 2 desktop grid, 2 × 3 tablet grid and a single mobile column. Each card contains a small number, a simple discipline-specific line graphic, title, one-sentence descriptor and “Read learning focus”.

Use a real button to expand the full copy inline. Support keyboard activation and `aria-expanded`. Expanded cards must not be clipped to preserve uniform height. Avoid hover-only descriptions.

Hover: border darkens and the arrow moves 3 px. Do not make the whole grid jump, tilt or follow the pointer.

When genuine placement records become available, add verified institution, dates, role and evidence to the relevant entry. Distinguish observation, simulation, assisted activity and assessed competency. Do not create percentage skill bars for clinical ability.

---

## 8. Selected work: three substantive concepts

### Section copy

**Heading:** Questions worth following.

**Body:**  
I am developing a small body of work around patient understanding, continuity of care and reflective learning. These concepts describe the questions I would like to explore and the outputs I would like to build.

The three entries below are original proposed concepts. They can be replaced with completed student work once actual titles, roles and evidence are supplied. A proposal is worthwhile content when its status is honest and its thinking is specific.

### Project 01 — Clearer discharge conversations

**Type:** Patient communication  
**Status:** Proposed quality-improvement concept  
**Role:** Proposed student contributor under supervision  
**Card summary:** Exploring how a short, plain-language conversation could help patients explain their next steps in their own words.

#### Detail-page copy

**The question**  
How might a clearer discharge conversation help a patient understand the plan they are expected to follow after leaving a clinical setting?

**Why this interests me**  
The clinical team may understand a plan while the patient leaves with questions they have not voiced. I am interested in the space between providing information and establishing what someone has understood.

**Proposed approach**  
With appropriate supervisor and institutional approval, first review how discharge information is currently communicated. Develop a brief conversation aid with the clinical team, test whether its wording is understandable and gather feedback on its usefulness. Any activity involving patients or service data would need the relevant permissions before it begins.

**Proposed output**  
A one-page communication aid and a short improvement report explaining what was tried, what feedback was received and what should change next.

**What I would examine**  
Whether the explanation covers the purpose of the plan, the next contact or follow-up step, opportunities for questions and clinician-approved information about when to seek further help. Clinical instructions would come from the responsible team, not from independently authored student advice.

**Current position**  
This is a proposed concept. No intervention, participant recruitment or improvement result is claimed.

**Reflection**  
Clarity is more than shortening a sentence. It involves finding out what the other person has understood.

#### Project graphic

Create a bespoke editorial diagram with three labelled panels: **Explanation → Understanding → Next step**. Use teal connector lines and a clay annotation dot. Do not fabricate before-and-after statistics.

### Project 02 — Continuity of care beyond the appointment

**Type:** Community health research  
**Status:** Proposed research concept  
**Role:** Proposed student researcher under supervision  
**Card summary:** Examining the practical questions that may sit between a planned follow-up and a patient's ability to return.

#### Detail-page copy

**The question**  
What practical barriers do patients describe when discussing follow-up care, and how might those accounts inform better communication or service planning?

**Why this interests me**  
A planned return visit may compete with travel, work, household responsibilities and uncertainty about what to expect. I want to explore those realities without treating missed follow-up as a simple lack of interest.

**Proposed approach**  
Begin with a supervisor-guided review of relevant literature and the local service context. If the project proceeds, develop a focused research question and obtain the required scientific and ethical approvals before collecting participant information. The final methods would depend on the approved question and available resources.

**Proposed output**  
A research protocol, followed only if approved and carried out by an appropriately reported study or presentation.

**Questions to explore**  
How clearly is the next visit explained? What resources does returning require? Which barriers are within a service's ability to change? What do patients identify as helpful?

**Current position**  
Concept stage. No participants, findings, dataset or publication exists in this example.

**Reflection**  
A recommendation becomes more useful when we understand the circumstances in which someone must act on it.

#### Project graphic

Use four small illustrated context panels: **Travel · Work · Family · Information**. Connect them to a central label, **Follow-up**. The graphic shows the project's questions rather than presenting an evidence-based causal model.

### Project 03 — The clinical learning notebook

**Type:** Medical education and reflection  
**Status:** Proposed learning resource  
**Role:** Proposed author and peer collaborator  
**Card summary:** Designing a structured way to turn a learning encounter into a question, an evidence search and a practical reflection.

#### Detail-page copy

**The question**  
How can I make reflection useful enough to shape what I learn next?

**Why this interests me**  
Busy learning days can leave many impressions and few clear next steps. I want a repeatable format that helps me identify one gap, explore it and return with a better question.

**Proposed approach**  
Develop a concise learning template, review its usefulness with peers and a mentor, and revise it around the feedback. Use simulated or appropriately de-identified educational material rather than public patient records.

**Proposed output**  
A reusable reflection worksheet and a small collection of original learning notes.

**Worksheet structure**  
What did I notice? What am I uncertain about? What question can I answer? What source did I use? What changed in my understanding? What will I ask or practise next under supervision?

**Current position**  
Proposed resource. The field notes in this document demonstrate an authored reflective style; they are not clinical encounter records or a completed evaluation of the resource.

**Reflection**  
A notebook becomes valuable when it changes the next question you ask.

#### Project graphic

Create an angled paper-sheet illustration with six numbered prompts. Keep text legible and do not overlay decorative writing that looks like genuine patient documentation.

### Project card composition

Feature Project 01 in a wide row with its diagram on the left and copy on the right. Place Projects 02 and 03 beneath it in two equal columns. Each card includes visible type, status, summary and “Read the concept”.

Do not include “Download findings”, “View publication” or “View dataset” unless a genuine deliverable exists. For a proposal, use “Read the concept”.

---

## 9. Community: thoughtful content without fake impact numbers

### Finished section copy

**Eyebrow:** Community perspective

**Heading:** Care continues beyond the consultation.

**Body:**

> I am interested in the moments when healthcare has to fit into ordinary life: a journey to a clinic, a conversation at home, a question someone is hesitant to ask, or a follow-up visit that must compete with other responsibilities.
>
> I would like to contribute to supervised community health initiatives that make information clearer, invite useful questions and build on the knowledge already present in a community.
>
> My approach would begin with listening to the organising team and the people the activity is intended to serve. A useful contribution should be relevant to that setting and honest about what a student can offer.

### Proposed involvement areas

**Health information that makes sense**  
Support the preparation of clear, locally appropriate educational materials reviewed by qualified professionals.

**Student-to-student learning**  
Help create spaces where learners can ask questions, practise explanation and share useful study approaches.

**Learning from community priorities**  
Participate in supervised work that begins with what people describe as difficult or important, rather than assuming the priorities in advance.

### Design

Use a full-width deep-teal section with warm-paper text. Include a restrained contour graphic along one edge and a large serif heading. Put the involvement areas in open columns separated by subtle rules rather than bright floating cards.

If a genuine community image is available, use a wide crop showing an approved activity without exposing private patient information. If no approved image exists, the contour graphic and typography are sufficient.

### Once the student supplies real activity records

Replace a proposed area with a specific story: activity name, organiser, location, date, the student's exact contribution, a permitted image and an approved supporting document. Add numbers only when the activity record supports both the number and his role. Attendance is not the same as measurable health improvement.

---

## 10. Academic journey: a credible visual narrative

### Heading

From foundations to the next chapter.

### Introduction

My training is a continuing movement from learning how the body works to learning how to ask, interpret, communicate and contribute within a clinical team.

### Timeline content

| Chapter | Title | Finished description |
| --- | --- | --- |
| Foundations | Understanding the body | Building a foundation in biomedical sciences and connecting mechanisms to the clinical questions they help explain. |
| Integration | Learning to reason | Bringing different areas of knowledge together, developing useful questions and becoming more deliberate about how I learn. |
| Clinical development | Learning in context | Developing assessment, communication and teamwork through supervised learning and reflection. |
| Current chapter | Approaching graduation | Consolidating learning, identifying areas for growth and preparing for the next stage of training. |
| Future direction | Continuing with purpose | Seeking appropriate opportunities for supervised clinical training, mentorship and meaningful research contribution. |

These are editorial chapters, not a published year-by-year curriculum. Add actual admission year, verified rotation dates and an expected graduation date only after confirmation. Do not infer a graduation year from the calendar.

### Visual treatment

Use a vertical timeline with an observation line and five small nodes. Alternate the text gently across the desktop grid without requiring the visitor to scan a zigzag maze. On mobile, align all content to one side.

The current chapter has a teal marker and the visible text “Current chapter”. Future direction uses a hollow marker. The timeline remains entirely readable before animation.

Draw the visible segment once as it enters the viewport. Do not illuminate nodes repeatedly on every scroll direction change.

---

## 11. Field notes: three complete original articles

### Section introduction

**Heading:** What I am learning to notice.

**Body:**  
Short reflections on listening, explanation and the realities that surround care. These are educational reflections, not personal medical advice or reports about identifiable patients.

The essays below are original sample writing. They are not claims about actual clinical encounters. Use the date they are genuinely reviewed and published; do not backdate them to create a history of activity.

### Article 01 — Listening before concluding

**Category:** Clinical reflection  
**Card excerpt:** A clear clinical summary begins with giving someone enough room to describe what matters to them.

#### Full article

It is tempting to listen for the detail that confirms the explanation already forming in your mind. A symptom fits a pattern, a familiar possibility appears, and the conversation begins to narrow.

I am learning to treat that moment as a reason to pause. What has the person not yet had space to say? What matters most to them about the experience? Which detail would make me reconsider the way I have framed the problem?

Listening carefully does not mean abandoning structure. It means using structure without allowing it to replace attention. A useful history still needs clarification and organisation, but the person's account should remain recognisable within the summary.

This is also a habit of intellectual honesty. If I have reached a conclusion too quickly, the next question may be designed to support it rather than test it. Making room for an alternative account helps me remember that early impressions are provisional.

The habit I want to develop is simple: listen long enough to understand the question I am actually being asked, then reason carefully about it with appropriate supervision.

### Article 02 — Plain language is clinical work

**Category:** Communication  
**Card excerpt:** An explanation has not achieved its purpose merely because it was accurate when it left the speaker's mouth.

#### Full article

Medical language can make a conversation efficient between people who share the same training. The same language can make an explanation difficult for someone who has not spent years learning it.

I am interested in the work of translating an idea without losing its meaning. That work begins with deciding what the person needs to understand now, choosing familiar words and allowing the explanation to unfold in manageable parts.

It also means being attentive to what happens after the explanation. A quiet nod may mean understanding, politeness, uncertainty or simply a wish to bring the conversation to an end. There needs to be room for questions without making someone feel they have failed a test.

One communication habit I want to practise is inviting the person to describe the next step in their own words. The purpose is to discover where my explanation needs improvement and discuss that with the responsible clinical team.

Plain language is not a reduction in seriousness. It is an effort to make an important conversation usable by the person it is intended to help.

### Article 03 — The context travels home

**Category:** Community health  
**Card excerpt:** A plan leaves the clinical setting with someone who still has a job, a household, a journey and a life to manage.

#### Full article

Inside a clinical setting, a plan can appear orderly. There is a next step, a follow-up date and an explanation of what should happen. Outside that setting, the same plan has to fit into ordinary life.

I am interested in the questions this raises. How far does someone need to travel? What might the journey cost? Who looks after a child while they are away? How easy is it to ask for clarification later?

These questions are not a substitute for clinical knowledge. They help us understand the conditions in which that knowledge is expected to become action.

They also challenge an easy assumption: that a recommendation not followed must have been ignored. The gap between a plan and a person's ability to act may contain information a team needs to hear.

As a learner, I want to become more attentive to that gap. Sometimes the most useful question is not only “What should happen next?” but “What could make that next step difficult?”

### Article presentation

Use three typographic cards with different editorial accents: a quote fragment, a margin note and a small contour illustration. Do not attach unrelated stock photos to each essay.

Full pages include title, category, author, genuine publication date, body and a link back to all notes. Calculate reading time from the actual word count. Include a discreet footer: “A student reflection on learning and communication. Not individual medical advice.”

---

## 12. Professional profile and evidence

### Heading

A clear view of my direction.

### Finished summary

> I am an MBChB student approaching graduation at Moi University's College of Health Sciences. My developing interests are clinical reasoning, community health and patient communication. I am looking for appropriate opportunities to continue learning under supervision, contribute to research and work with teams that value thoughtful care and clear explanation.

### Profile rows

| Label | Display content |
| --- | --- |
| Programme | Bachelor of Medicine and Bachelor of Surgery (MBChB) — in progress |
| University | Moi University |
| Academic setting | College of Health Sciences · School of Medicine |
| University location | Eldoret, Kenya |
| Current stage | Approaching graduation |
| Developing interests | Clinical reasoning · Community health · Patient communication |
| Next direction | Supervised training · Research collaboration · Mentorship |

Use “University location” rather than assuming the student's residence. Language fluency, registration status and exact availability require personal confirmation.

### Optional evidence panel

When supplied, present genuine certificates, abstracts, presentations and signed placement confirmations. Each document tile needs a descriptive title, issuer or context, date and accessible file action. Show expiry dates where relevant.

Do not add a decorative “BLS certified” tile, a university award, an AMPATH affiliation or a journal publication without the actual supporting record.

For project evidence, distinguish proposal, ongoing work, submitted manuscript, accepted manuscript and published article. Do not visually flatten them into the same status.

### CV action

The eventual live label is **Download my CV**. Render it only when a real, reviewed PDF exists. Beside it show “PDF” and the actual file size. If no CV has been supplied, keep the professional profile on the page and omit the download action entirely.

Do not show an empty button, fake download or “CV coming soon” tile in the public portfolio.

---

## 13. Contact: professional, useful and complete

### Finished copy

**Heading:** A conversation could be the next step.

**Body:**  
I would welcome a conversation about mentorship, an appropriate research opportunity or the next stage of supervised clinical training. If my interests connect with your work, please get in touch.

**Supporting line:**  
Tell me a little about your team, the opportunity and the best way to continue the conversation.

### Contact form

**Fields:** Your name · Your email · Reason for reaching out · Your message.

**Reason options:** Mentorship · Research collaboration · Training opportunity · Professional connection.

**Submit label:** Send enquiry.

**Consent copy:** Your details will be used to respond to this enquiry. Please do not send medical records or private patient information.

**Success copy:** Your enquiry has been sent. Thank you for getting in touch.

**Failure copy:** Your enquiry could not be sent. Please try again, or use the email link if it is available.

**Privacy note:** This form is for professional enquiries. It is not a channel for medical consultations.

Do not fabricate an email address, telephone number, LinkedIn account or promised response time. Use the actual student's supplied details and a tested recipient. Omit unsupported contact methods. A contact form must not show success unless submission genuinely succeeds.

### Layout

Place the statement on the left and the form on the right within one warm-white framed surface. On mobile, statement and contact options precede the form. Labels remain visible above fields; placeholder text must not act as the label.

### Footer copy

**Brian Kiptoo**  
Medicine, with the person in view.

MBChB student · Moi University College of Health Sciences

Professional portfolio · Educational reflections · Get in touch

Show the actual current year automatically. A modest “Website by GTSS” credit can be included if the owner agrees, without competing with his identity.

---

## 14. Photography and bespoke artwork brief

### Asset plan

| Asset | Composition | Placement | Requirements |
| --- | --- | --- | --- |
| Main portrait | Actual student, soft natural light, calm expression, portrait orientation. | Hero. | Largest priority; clear face, authentic attire, permission to publish. |
| Study image | Actual student reading or preparing notes in an uncluttered space. | About, optional. | No visible patient information or fabricated certificate wall. |
| Learning setting | Permitted image of an appropriate educational setting. | Journey or clinical learning, optional. | Approval for setting and people; no implied employment. |
| Community image | Actual approved activity, if one exists. | Community. | Caption identifies real role and context. |
| Anatomical plate | Bespoke teal line art; restrained thorax theme. | Hero. | SVG preferred; decorative unless reviewed as educational content. |
| Project diagrams | Custom graphics matching the three concepts. | Work cards and detail pages. | Labels consistent with project status; no invented numerical results. |
| Social preview | Portrait, name, status, headline and a single line motif. | Link sharing. | 1,200 × 630 px, readable at small preview size. |

### Portrait direction

Place the student near a large window or shaded outdoor light. Use a warm, neutral background. Leave space around the head and shoulders for responsive crops. Avoid exaggerated retouching, unrelated operating theatre backgrounds and props that misrepresent his experience.

Ask for a clean portrait and a wider contextual image from the same session so they feel like a coherent set.

### Artwork production direction

For anatomical artwork: create a minimal editorial thorax illustration with delicate teal strokes, warm paper background and a small clay accent. No gore, fluorescent effects, text labels or faux radiology imagery. A hand-edited SVG is preferable when clean scalable line work is the goal.

If generated artwork is used, restrict it to decorative illustration. Do not generate an image of the student performing a procedure, participating in a camp or standing beside an invented supervisor as documentary evidence.

### Real photos unavailable at build time

Use the custom line artwork and a typographic monogram composition during internal development. Do not publish a stranger's face as Brian. Do not allow the missing portrait to produce a broken-image box or a public “upload image here” instruction.

### Favicon and monogram

Design a compact BK monogram using two interlocking letterforms and a small observation dot. Provide light and dark versions. The identity should still read clearly at 32 px.

---

## 15. Motion choreography

### Overall rule

Motion should help readers notice hierarchy and relationships. The page becomes still after each reveal. Reading areas do not drift, flicker or pulse continuously.

| Interaction | Behaviour | Duration | Mobile behaviour |
| --- | --- | --- | --- |
| Hero entrance | Short stagger with opacity and slight upward movement. | 450–650 ms. | Same hierarchy, reduced distance. |
| Observation line | One path reveal when the section becomes visible. | 700–900 ms. | Simpler path, same meaning. |
| Section entrance | Fade and translate 12 px; run once. | 400–500 ms. | Translate 6–8 px. |
| Portrait interaction | Optional 2–3 px offset on deliberate pointer movement. | Smoothed lightly. | Static; disable on touch. |
| Clinical card | Border transition and arrow shift. | 160–220 ms. | Press feedback; no hover dependency. |
| Inline expansion | Natural content reveal without clipping. | 180–240 ms. | Identical functionality. |
| Timeline | Draw a bounded segment once; reveal node text. | 500–700 ms. | Single vertical line. |
| Work preview | Image scales to at most 1.02 within its frame. | 250–350 ms. | Static image. |
| Menu | Simple opacity and 8 px translation. | 180–220 ms. | Accessible focus handling. |
| Button feedback | Colour change; optional arrow movement. | 140–180 ms. | Visible pressed state. |

Use a gentle decelerating easing curve, such as `cubic-bezier(0.22, 1, 0.36, 1)`, for section entrances. Avoid spring bounce on professional content.

### Reduced-motion mode

Respect `prefers-reduced-motion`. Remove translations, parallax, line drawing and scaling. Content appears immediately or with a very short opacity change. Set scrolling to immediate navigation when appropriate. All navigation, expansion and form functions must still work.

### Excluded effects

- No animated heartbeat behind body copy.
- No scroll hijacking, forced horizontal chapters or artificial smooth-scroll physics.
- No cursor replacement, starfield, moving mesh or constant background motion.
- No typewriter text for the student's name or status.
- No fake loading sequence or percentage counter.
- No auto-rotating testimonials or animated patient numbers.

The signature effect is the observation line plus careful editorial reveals. Keep it recognisable by using it sparingly.

---

## 16. Responsive compositions

| Width | Required behaviour |
| --- | --- |
| 360–479 px | One column; menu navigation; full-width readable cards; 20 px gutters; no miniature desktop composition. |
| 480–767 px | One primary column with wider portrait and comfortable text measure. |
| 768–1,023 px | Two-column clinical cards; balanced hero if copy fits; stack contact when form becomes narrow. |
| 1,024–1,439 px | Full editorial grid with 7/5 hero split and 3-column clinical learning. |
| 1,440 px and above | Retain maximum content width and add outer breathing room. |

Verify around 360, 390, 768, 1,024 and 1,440 px, plus landscape on a small phone. Check intermediate widths, not just these exact sizes.

Do not set a fixed hero height on mobile. Keep identity and actions visible as normal content rather than squeezing them into one viewport. Use fluid heading sizes, sensible wrapping and intrinsic image dimensions.

Text must remain usable at 200% enlargement. Cards may grow. Buttons may wrap or stack. A portrait caption must never cover the face to preserve a desktop layout.

---

## 17. Build architecture and content management

### Suggested implementation

Use the existing project stack when available. For a fresh build, Next.js with TypeScript and Tailwind is a suitable option. Use server-rendered content for the main page and detail pages, with small interactive components for navigation, card expansion and form handling. Pin versions during implementation rather than treating this brief as a dependency-version recommendation.

Use CSS transitions for ordinary interface feedback. Add a motion library only if the coordinated line and entrance effects justify its footprint. Avoid a 3D runtime for this concept.

### Recommended components

- `SiteHeader`
- `HeroPortrait`
- `SectionHeading`
- `ObservationLine`
- `ClinicalLearningCard`
- `FeaturedWorkCard`
- `AcademicJourney`
- `FieldNoteCard`
- `ProfessionalProfile`
- `ContactForm`
- `SiteFooter`

Use distinct section compositions. Do not make the entire page a repeated grid of identical cards.

### Central content structure

| Collection | Important fields |
| --- | --- |
| Profile | Name, current status, programme, university, academic setting, headline, biography, portrait, approved contacts. |
| Clinical learning | Title, summary, detailed learning focus, themes, reflection prompt, optional verified placement information. |
| Work | Slug, title, type, status, exact role, summary, question, approach, output, reflection, permitted evidence. |
| Journey | Chapter, label, description, optional verified dates, current/future status. |
| Notes | Slug, title, category, excerpt, body, actual publication date, review date where relevant. |
| Documents | Title, issuer or context, actual date, status, file, permission to publish. |

Separate verified facts from example content in the content file or CMS. A useful internal state is `example`, `verified` or `proposal`. This state can govern whether evidence-based claims and downloads appear.

Do not expose editorial instructions or internal verification badges as awkward product UI. Public status labels such as “Proposed research concept” should remain visible where they explain what the reader is viewing.

### Contact behaviour

Use server-side validation, a configured mail recipient, sensible rate limiting and spam protection. Keep service credentials on the server. Preserve the visitor's message on submission failure and provide accessible field errors.

If no working delivery channel exists, omit the form from the published site and use a genuine approved email link instead. Do not launch a decorative form.

---

## 18. Metadata and link sharing

### Homepage title

**Brian Kiptoo | MBChB Student | Moi University**

### Meta description

**Brian Kiptoo is an MBChB student approaching graduation at Moi University, exploring clinical reasoning, community health and patient communication.**

This is finished sample metadata; update the identity and interests to match the actual student before publication.

### Social preview composition

Left side: name, status and the short headline. Right side: genuine portrait with a soft teal frame. Use one clay dot and a quiet anatomical line. Do not add a dozen social icons or institution crests.

Preview copy:

> Brian Kiptoo  
> Medicine, with the person in view.  
> MBChB student · Moi University CHS

Keep all critical content within a generous safe area because link previews can crop differently.

### Search structure

Use one clear H1, descriptive headings, semantic landmarks, canonical URLs, a sitemap and appropriate indexing settings. Detail pages should have unique titles and summaries. Staging and any publicly accessible example version should be marked `noindex` until the identity and personal claims have been reviewed.

If using structured data, describe a `Person` and only the verified `affiliation`, identity and contact links. Do not invent a `Physician` practice listing or awarded educational credential. Do not promise that a portfolio will produce a specific search ranking or rich result.

---

## 19. Accessibility, performance and reading comfort

### Accessibility requirements

- Semantic headings, landmarks and a working skip link.
- Visible keyboard focus on the warm and dark surfaces.
- Contrast checked against WCAG AA criteria.
- Descriptive alternative text for informative photos; empty alt text for decorative graphics.
- Meaningful buttons and links; no clickable `div` navigation.
- Keyboard-accessible expanded content and menus.
- Form labels, errors associated with fields and accessible submission feedback.
- No information available only on hover or through colour.
- No essential text embedded in a decorative image.
- Text enlargement, reduced motion and touch interaction verified.

### Performance requirements

Serve appropriately sized modern images with explicit dimensions. Prioritise the hero portrait; lazy-load below-the-fold images. Self-host approved fonts with a small number of weights. Keep animation limited to transforms, opacity and small SVG paths.

Aim for an initial transferred page size around 1–1.5 MB, adjusting for legitimate content needs, and modest JavaScript. Use measured results to guide optimisation rather than counting animations as a design achievement.

Target good Core Web Vitals and Lighthouse accessibility, SEO and performance scores around 90 or above. These are goals, not promises. Test the built page on a throttled mobile connection and an ordinary Android phone when available; the reading experience matters more than a single lab score.

The portfolio must show useful content while images load. A failed decorative asset must not prevent reading or navigation.

---

## 20. Publication review: replace accurately without weakening the design

The design and substantial writing are ready to adapt. The following personal facts require the student's input, rather than guesses:

| Needed information | What changes in this document/site |
| --- | --- |
| Actual full name and preferred public identity | Monogram, hero, metadata, footer and author labels. |
| Current study status and expected graduation date | Identity line, profile and journey. |
| Genuine motivation and interests | About narrative and selected clinical interests. |
| Actual placements and exact role | Verified learning entries and supporting context. |
| Existing work and evidence | Replace proposed concepts or keep them clearly proposed. |
| Outreach or leadership activity | Specific community stories with approved evidence. |
| Genuine portrait and publication permission | Hero and sharing image. |
| Approved professional contact | Form recipient and visible links. |
| Reviewed CV and certificates, if any | Real downloads and evidence panel. |
| Personal languages, achievements and registration details | Include only when supplied and relevant. |

Do not turn this into a questionnaire shown on the public website. It is the builder's content handover list.

### Content rules for an emerging clinician

Clinical reflections should use fictional teaching material or adequately de-identified and authorised content. Do not publish patient names, identifiable images, records or unusual details that reveal a person indirectly. Do not use invented supervisors' quotations as testimonials.

Use institutional names as context. Obtain permission for crests or logos where required and avoid presenting this personal portfolio as an official Moi University website.

If an endorsement is genuinely supplied, include its exact approved wording, attribution and permission. Otherwise, the design remains complete without a testimonial section.

---

## 21. Acceptance criteria and build handoff

### Content acceptance

- A visitor can identify the student, programme and current stage within the hero.
- All sections contain meaningful written content rather than repeated filler.
- Illustrative identity and narrative have been replaced or the site remains a clearly labelled internal example.
- Proposed work remains visibly proposed until evidence supports another status.
- No invented dates, placements, awards, results, contacts or qualifications appear.
- Field notes read as authored reflections and have genuine publication dates.
- Every public download exists and contains the document its label describes.

### Design acceptance

- Paper, deep teal, clay and typographic hierarchy form one coherent identity.
- Hero, about, clinical cards, projects, community and articles have distinct compositions.
- Portrait is recognisable and crops correctly across screen sizes.
- Graphics are bespoke and relevant to the content.
- Section rhythm alternates strong visuals with quiet reading space.
- No persistent moving background distracts from reading.

### Interaction acceptance

- Navigation anchors land below the sticky header.
- Mobile menu, expanded clinical entries and project routes work by touch and keyboard.
- Browser back returns naturally from work and article pages.
- Contact submission is tested for successful delivery and failure states.
- Reduced-motion mode is fully usable.
- Forms and disclosure controls retain state sensibly.

### Delivery package for the eventual website

1. Responsive homepage and complete detail pages.
2. Centralised editable content with example and verified states kept distinct.
3. Optimised portrait files and permitted contextual photography.
4. Original SVG observation motif and project graphics.
5. Monogram, favicon and social-preview asset.
6. Working professional contact route.
7. Reviewed metadata and sitemap.
8. A short content-editing guide for the owner.

### Copy-ready instruction for the developer or building agent

> Build the portfolio described in this document with an editorial visual identity: warm paper surfaces, deep teal, restrained clay accents, DM Sans body text and Instrument Serif headings. Use the finished sample content, preserving proposed-project labels. Make the hero personal, the clinical learning section informative, the work section evidence-conscious and the field notes readable. Create bespoke line graphics and distinct compositions instead of repeating generic card grids. Use a genuine portrait when supplied. Motion should reveal hierarchy once and then become still. Implement accessible responsive navigation, functional detail routes and a tested professional contact channel. Keep all personal facts honest, omit unsupported evidence and downloads, and replace the illustrative identity before publishing a real student's portfolio.

---

## 22. Institutional grounding and sources

Reviewed through public search results on 11 October 2026. Direct page retrieval timed out during preparation; the institutional facts below are supported by the retrieved official-source text. Recheck the linked pages during implementation if programme information is being updated.

1. **Moi University — Bachelor's programmes**  
   https://mu.ac.ke/index.php/bachelors/  
   Lists Bachelor of Medicine and Bachelor of Surgery (MBChB) as a six-year programme. Programme duration is institutional context, not proof of this student's year of study or graduation date.

2. **Moi University — School of Medicine**  
   https://mu.ac.ke/index.php/medicine/  
   Describes an approach oriented towards community health and problem-based learning. This informs the portfolio's emphasis on questions, reflection and community perspective.

3. **Moi University School of Medicine — Medicine**  
   https://som.mu.ac.ke/index.php/event/medicine  
   Describes problem-based learning and community context in medical education.

4. **Moi University — School of Medicine undergraduate programmes notice**  
   https://oldsite.mu.ac.ke/en/mediaa/announcements/270-apply-now-school-of-medicine-undergraduate-programmes-2019-2020-intake  
   Provides historical confirmation of the MBChB programme within the College of Health Sciences, School of Medicine, Eldoret. This older notice is used only for institutional context, not current fees, admissions dates or personal placement claims.

No source above verifies Brian Kiptoo's identity, experiences or achievements. All student-specific writing in this brief is original illustrative content. No source is being used as an institutional endorsement of this portfolio.

