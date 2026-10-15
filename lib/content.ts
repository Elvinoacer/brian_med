export type ContentStatus = "example" | "verified" | "proposal";

export type Profile = {
  name: string;
  initials: string;
  status: string;
  programme: string;
  university: string;
  academicSetting: string;
  location: string;
  headline: string;
  introduction: string;
  positioning: string;
  biography: string[];
  professionalSummary: string;
  interests: string[];
  nextDirection: string[];
  contact: { email: string | null };
  contentStatus: ContentStatus;
};

export type ClinicalArea = {
  id: string;
  number: string;
  title: string;
  summary: string;
  description: string;
  themes: string[];
  reflectionPrompt: string;
  contentStatus: ContentStatus;
};

export type WorkProject = {
  slug: string;
  number: string;
  title: string;
  type: string;
  status: string;
  role: string;
  summary: string;
  question: string;
  interest: string;
  approach: string;
  output: string;
  explorationHeading: string;
  exploration: string;
  currentPosition: string;
  reflection: string;
  graphic: "discharge" | "continuity" | "notebook";
  contentStatus: ContentStatus;
  readingTime: number;
};

export type FieldNote = {
  slug: string;
  number: string;
  title: string;
  category: string;
  excerpt: string;
  paragraphs: string[];
  publishedAt: string | null;
  reviewedAt: string | null;
  readingTime: number;
  contentStatus: ContentStatus;
};

export type JourneyChapter = {
  chapter: string;
  title: string;
  description: string;
  status: "past" | "current" | "future";
  dates: string | null;
};

/** Read time is derived from the visible article's actual text at 200 words/minute. */
export function calculateReadingTime(text: string | string[]): number {
  const prose = Array.isArray(text) ? text.join(" ") : text;
  return Math.max(
    1,
    Math.ceil(prose.trim().split(/\s+/).filter(Boolean).length / 200),
  );
}

// The brief supplies an illustrative identity. Keep this example out of search
// indexes until the owner has reviewed the identity, narrative, and contacts.
export const profile: Profile = {
  name: "Brian Kiptoo",
  initials: "BK",
  status: "MBChB student approaching graduation",
  programme: "Bachelor of Medicine and Bachelor of Surgery (MBChB)",
  university: "Moi University",
  academicSetting: "College of Health Sciences · School of Medicine",
  location: "Eldoret, Kenya",
  headline: "Medicine, with the person in view.",
  introduction:
    "I am an MBChB student approaching graduation at Moi University. I am developing my clinical judgement with a growing interest in community health, thoughtful communication and the everyday realities that shape care.",
  positioning:
    "An emerging clinician interested in the intersection of careful clinical reasoning, clear communication and care that remains practical beyond the hospital.",
  biography: [
    "Medicine asks me to work at two levels at once: to understand what may be happening in the body, and to understand what that experience means to the person in front of me.",
    "As I approach the end of my undergraduate training, I am interested in becoming a clinician who can think carefully, communicate honestly and recognise the limits of my own knowledge. I want to bring useful questions to a team, learn from feedback and make space for the patient's own account.",
    "My developing interests lie in clinical reasoning, continuity of care and community health. I am especially drawn to the point where a clinical plan meets everyday life: how someone understands an explanation, how they return for follow-up, and what may make the next step difficult.",
    "I see this portfolio as a record of that development: the questions I am pursuing, the work I am building and the habits I want to carry into the next stage of training.",
  ],
  professionalSummary:
    "I am an MBChB student approaching graduation at Moi University's College of Health Sciences. My developing interests are clinical reasoning, community health and patient communication. I am looking for appropriate opportunities to continue learning under supervision, contribute to research and work with teams that value thoughtful care and clear explanation.",
  interests: [
    "Clinical reasoning",
    "Community health",
    "Patient communication",
  ],
  nextDirection: [
    "Supervised training",
    "Research collaboration",
    "Mentorship",
  ],
  contact: { email: "briankiptoo125@gmail.com" },
  contentStatus: "example",
};

export const perspectiveValues = [
  {
    title: "Listen before narrowing",
    description:
      "Make room for the patient's words before turning their experience into a clinical summary.",
  },
  {
    title: "Explain with care",
    description:
      "Choose language someone can understand and leave room for questions.",
  },
  {
    title: "Keep learning visible",
    description:
      "Reflect on uncertainty, seek feedback and be honest about developing skills.",
  },
];

export const clinicalAreas: ClinicalArea[] = [
  {
    id: "internal-medicine",
    number: "01",
    title: "Internal medicine",
    summary: "Seeing the pattern without losing the person.",
    description:
      "I am drawn to the reasoning involved in bringing symptoms, examination findings and investigations into a coherent assessment. My learning focus is on presenting information clearly, considering alternatives and understanding how long-term illness affects everyday routines.",
    themes: [
      "History synthesis",
      "Differential reasoning",
      "Continuity of care",
    ],
    reflectionPrompt:
      "What information would change the way I frame this problem?",
    contentStatus: "example",
  },
  {
    id: "surgery",
    number: "02",
    title: "Surgery",
    summary: "Precision begins before the procedure.",
    description:
      "My interest in surgery includes the assessment, communication and teamwork surrounding an operation. I want to better understand how teams prepare patients, discuss uncertainty and follow recovery, while developing appropriate skills within supervised training.",
    themes: [
      "Surgical assessment",
      "Team communication",
      "Perioperative learning",
    ],
    reflectionPrompt:
      "How does each part of the pathway prepare the next person to act safely?",
    contentStatus: "example",
  },
  {
    id: "paediatrics",
    number: "03",
    title: "Paediatrics and child health",
    summary: "Understanding the child within the family.",
    description:
      "Child health challenges me to adapt how I observe, communicate and learn. I am interested in making explanations accessible to caregivers and understanding the family circumstances that shape a child's care.",
    themes: ["Family communication", "Growth and development", "Prevention"],
    reflectionPrompt:
      "What would help this caregiver feel informed and able to ask questions?",
    contentStatus: "example",
  },
  {
    id: "obstetrics",
    number: "04",
    title: "Obstetrics and gynaecology",
    summary: "Clinical attention, dignity and trust.",
    description:
      "I am interested in the relationship between attentive clinical assessment and respectful communication in reproductive health. My learning emphasis is on privacy, informed discussion and understanding care within a wider family and community context.",
    themes: [
      "Respectful care",
      "Maternal health learning",
      "Sensitive communication",
    ],
    reflectionPrompt:
      "Have I made the conversation understandable, private and respectful?",
    contentStatus: "example",
  },
  {
    id: "mental-health",
    number: "05",
    title: "Mental health",
    summary: "Making room for what is difficult to say.",
    description:
      "Mental health learning reminds me that pace, language and listening can shape what someone feels able to share. I am interested in reducing judgement in clinical conversations and appreciating the relationship between psychological wellbeing and physical health.",
    themes: [
      "Listening",
      "Person-centred interviewing",
      "Whole-person perspective",
    ],
    reflectionPrompt:
      "What assumptions might be narrowing my understanding of this person's experience?",
    contentStatus: "example",
  },
  {
    id: "community-health",
    number: "06",
    title: "Community health",
    summary: "Understanding the life around the illness.",
    description:
      "I want to understand how distance, costs, work, family support and health information influence access to care. Community health interests me because it connects clinical learning with prevention, service design and the conditions people live within.",
    themes: ["Access to care", "Health communication", "Community perspective"],
    reflectionPrompt:
      "What might make the recommended next step difficult outside this setting?",
    contentStatus: "example",
  },
];

const projectContent: Omit<WorkProject, "readingTime">[] = [
  {
    slug: "clearer-discharge-conversations",
    number: "01",
    title: "Clearer discharge conversations",
    type: "Patient communication",
    status: "Proposed quality-improvement concept",
    role: "Proposed student contributor under supervision",
    summary:
      "Exploring how a short, plain-language conversation could help patients explain their next steps in their own words.",
    question:
      "How might a clearer discharge conversation help a patient understand the plan they are expected to follow after leaving a clinical setting?",
    interest:
      "The clinical team may understand a plan while the patient leaves with questions they have not voiced. I am interested in the space between providing information and establishing what someone has understood.",
    approach:
      "With appropriate supervisor and institutional approval, first review how discharge information is currently communicated. Develop a brief conversation aid with the clinical team, test whether its wording is understandable and gather feedback on its usefulness. Any activity involving patients or service data would need the relevant permissions before it begins.",
    output:
      "A one-page communication aid and a short improvement report explaining what was tried, what feedback was received and what should change next.",
    explorationHeading: "What I would examine",
    exploration:
      "Whether the explanation covers the purpose of the plan, the next contact or follow-up step, opportunities for questions and clinician-approved information about when to seek further help. Clinical instructions would come from the responsible team, not from independently authored student advice.",
    currentPosition:
      "This is a proposed concept. No intervention, participant recruitment or improvement result is claimed.",
    reflection:
      "Clarity is more than shortening a sentence. It involves finding out what the other person has understood.",
    graphic: "discharge",
    contentStatus: "proposal",
  },
  {
    slug: "continuity-of-care",
    number: "02",
    title: "Continuity of care beyond the appointment",
    type: "Community health research",
    status: "Proposed research concept",
    role: "Proposed student researcher under supervision",
    summary:
      "Examining the practical questions that may sit between a planned follow-up and a patient's ability to return.",
    question:
      "What practical barriers do patients describe when discussing follow-up care, and how might those accounts inform better communication or service planning?",
    interest:
      "A planned return visit may compete with travel, work, household responsibilities and uncertainty about what to expect. I want to explore those realities without treating missed follow-up as a simple lack of interest.",
    approach:
      "Begin with a supervisor-guided review of relevant literature and the local service context. If the project proceeds, develop a focused research question and obtain the required scientific and ethical approvals before collecting participant information. The final methods would depend on the approved question and available resources.",
    output:
      "A research protocol, followed only if approved and carried out by an appropriately reported study or presentation.",
    explorationHeading: "Questions to explore",
    exploration:
      "How clearly is the next visit explained? What resources does returning require? Which barriers are within a service's ability to change? What do patients identify as helpful?",
    currentPosition:
      "Concept stage. No participants, findings, dataset or publication exists in this example.",
    reflection:
      "A recommendation becomes more useful when we understand the circumstances in which someone must act on it.",
    graphic: "continuity",
    contentStatus: "proposal",
  },
  {
    slug: "clinical-learning-notebook",
    number: "03",
    title: "The clinical learning notebook",
    type: "Medical education and reflection",
    status: "Proposed learning resource",
    role: "Proposed author and peer collaborator",
    summary:
      "Designing a structured way to turn a learning encounter into a question, an evidence search and a practical reflection.",
    question:
      "How can I make reflection useful enough to shape what I learn next?",
    interest:
      "Busy learning days can leave many impressions and few clear next steps. I want a repeatable format that helps me identify one gap, explore it and return with a better question.",
    approach:
      "Develop a concise learning template, review its usefulness with peers and a mentor, and revise it around the feedback. Use simulated or appropriately de-identified educational material rather than public patient records.",
    output:
      "A reusable reflection worksheet and a small collection of original learning notes.",
    explorationHeading: "Worksheet structure",
    exploration:
      "What did I notice? What am I uncertain about? What question can I answer? What source did I use? What changed in my understanding? What will I ask or practise next under supervision?",
    currentPosition:
      "Proposed resource. The field notes in this document demonstrate an authored reflective style; they are not clinical encounter records or a completed evaluation of the resource.",
    reflection:
      "A notebook becomes valuable when it changes the next question you ask.",
    graphic: "notebook",
    contentStatus: "proposal",
  },
];

export const workProjects: WorkProject[] = projectContent.map((project) => ({
  ...project,
  readingTime: calculateReadingTime([
    project.summary,
    project.question,
    project.interest,
    project.approach,
    project.output,
    project.exploration,
    project.currentPosition,
    project.reflection,
  ]),
}));

export const communityAreas = [
  {
    title: "Health information that makes sense",
    description:
      "Support the preparation of clear, locally appropriate educational materials reviewed by qualified professionals.",
  },
  {
    title: "Student-to-student learning",
    description:
      "Help create spaces where learners can ask questions, practise explanation and share useful study approaches.",
  },
  {
    title: "Learning from community priorities",
    description:
      "Participate in supervised work that begins with what people describe as difficult or important, rather than assuming the priorities in advance.",
  },
];

export const journey: JourneyChapter[] = [
  {
    chapter: "Foundations",
    title: "Understanding the body",
    description:
      "Building a foundation in biomedical sciences and connecting mechanisms to the clinical questions they help explain.",
    status: "past",
    dates: null,
  },
  {
    chapter: "Integration",
    title: "Learning to reason",
    description:
      "Bringing different areas of knowledge together, developing useful questions and becoming more deliberate about how I learn.",
    status: "past",
    dates: null,
  },
  {
    chapter: "Clinical development",
    title: "Learning in context",
    description:
      "Developing assessment, communication and teamwork through supervised learning and reflection.",
    status: "past",
    dates: null,
  },
  {
    chapter: "Current chapter",
    title: "Approaching graduation",
    description:
      "Consolidating learning, identifying areas for growth and preparing for the next stage of training.",
    status: "current",
    dates: null,
  },
  {
    chapter: "Future direction",
    title: "Continuing with purpose",
    description:
      "Seeking appropriate opportunities for supervised clinical training, mentorship and meaningful research contribution.",
    status: "future",
    dates: null,
  },
];

const noteContent: Omit<FieldNote, "readingTime">[] = [
  {
    slug: "listening-before-concluding",
    number: "01",
    title: "Listening before concluding",
    category: "Clinical reflection",
    excerpt:
      "A clear clinical summary begins with giving someone enough room to describe what matters to them.",
    paragraphs: [
      "It is tempting to listen for the detail that confirms the explanation already forming in your mind. A symptom fits a pattern, a familiar possibility appears, and the conversation begins to narrow.",
      "I am learning to treat that moment as a reason to pause. What has the person not yet had space to say? What matters most to them about the experience? Which detail would make me reconsider the way I have framed the problem?",
      "Listening carefully does not mean abandoning structure. It means using structure without allowing it to replace attention. A useful history still needs clarification and organisation, but the person's account should remain recognisable within the summary.",
      "This is also a habit of intellectual honesty. If I have reached a conclusion too quickly, the next question may be designed to support it rather than test it. Making room for an alternative account helps me remember that early impressions are provisional.",
      "The habit I want to develop is simple: listen long enough to understand the question I am actually being asked, then reason carefully about it with appropriate supervision.",
    ],
    publishedAt: null,
    reviewedAt: null,
    contentStatus: "example",
  },
  {
    slug: "plain-language-is-clinical-work",
    number: "02",
    title: "Plain language is clinical work",
    category: "Communication",
    excerpt:
      "An explanation has not achieved its purpose merely because it was accurate when it left the speaker's mouth.",
    paragraphs: [
      "Medical language can make a conversation efficient between people who share the same training. The same language can make an explanation difficult for someone who has not spent years learning it.",
      "I am interested in the work of translating an idea without losing its meaning. That work begins with deciding what the person needs to understand now, choosing familiar words and allowing the explanation to unfold in manageable parts.",
      "It also means being attentive to what happens after the explanation. A quiet nod may mean understanding, politeness, uncertainty or simply a wish to bring the conversation to an end. There needs to be room for questions without making someone feel they have failed a test.",
      "One communication habit I want to practise is inviting the person to describe the next step in their own words. The purpose is to discover where my explanation needs improvement and discuss that with the responsible clinical team.",
      "Plain language is not a reduction in seriousness. It is an effort to make an important conversation usable by the person it is intended to help.",
    ],
    publishedAt: null,
    reviewedAt: null,
    contentStatus: "example",
  },
  {
    slug: "context-travels-home",
    number: "03",
    title: "The context travels home",
    category: "Community health",
    excerpt:
      "A plan leaves the clinical setting with someone who still has a job, a household, a journey and a life to manage.",
    paragraphs: [
      "Inside a clinical setting, a plan can appear orderly. There is a next step, a follow-up date and an explanation of what should happen. Outside that setting, the same plan has to fit into ordinary life.",
      "I am interested in the questions this raises. How far does someone need to travel? What might the journey cost? Who looks after a child while they are away? How easy is it to ask for clarification later?",
      "These questions are not a substitute for clinical knowledge. They help us understand the conditions in which that knowledge is expected to become action.",
      "They also challenge an easy assumption: that a recommendation not followed must have been ignored. The gap between a plan and a person's ability to act may contain information a team needs to hear.",
      "As a learner, I want to become more attentive to that gap. Sometimes the most useful question is not only “What should happen next?” but “What could make that next step difficult?”",
    ],
    publishedAt: null,
    reviewedAt: null,
    contentStatus: "example",
  },
];

export const fieldNotes: FieldNote[] = noteContent.map((note) => ({
  ...note,
  readingTime: calculateReadingTime(note.paragraphs),
}));

export const professionalRows = [
  { label: "Programme", value: `${profile.programme} — in progress` },
  { label: "University", value: profile.university },
  { label: "Academic setting", value: profile.academicSetting },
  { label: "University location", value: profile.location },
  { label: "Current stage", value: "Approaching graduation" },
  { label: "Developing interests", value: profile.interests.join(" · ") },
  { label: "Next direction", value: profile.nextDirection.join(" · ") },
];

export const sectionCopy = {
  about: {
    eyebrow: "My perspective",
    heading: "Learning the science. Understanding the person.",
    quote: "A good question can change what you notice next.",
  },
  clinical: {
    eyebrow: "Clinical learning",
    heading: "Where knowledge becomes judgement.",
    introduction:
      "I am interested in the habits that make clinical learning useful: collecting a clear history, noticing relevant findings, organising possibilities and communicating a reasoned assessment under supervision.",
    label: "Areas of developing interest",
  },
  work: {
    eyebrow: "Selected work",
    heading: "Questions worth following.",
    introduction:
      "I am developing a small body of work around patient understanding, continuity of care and reflective learning. These concepts describe the questions I would like to explore and the outputs I would like to build.",
  },
  community: {
    eyebrow: "Community perspective",
    heading: "Care continues beyond the consultation.",
    paragraphs: [
      "I am interested in the moments when healthcare has to fit into ordinary life: a journey to a clinic, a conversation at home, a question someone is hesitant to ask, or a follow-up visit that must compete with other responsibilities.",
      "I would like to contribute to supervised community health initiatives that make information clearer, invite useful questions and build on the knowledge already present in a community.",
      "My approach would begin with listening to the organising team and the people the activity is intended to serve. A useful contribution should be relevant to that setting and honest about what a student can offer.",
    ],
  },
  journey: {
    eyebrow: "My journey",
    heading: "From foundations to the next chapter.",
    introduction:
      "My training is a continuing movement from learning how the body works to learning how to ask, interpret, communicate and contribute within a clinical team.",
  },
  notes: {
    eyebrow: "Field notes",
    heading: "What I am learning to notice.",
    introduction:
      "Short reflections on listening, explanation and the realities that surround care. These are educational reflections, not personal medical advice or reports about identifiable patients.",
  },
  professional: {
    eyebrow: "Professional profile",
    heading: "A clear view of my direction.",
  },
  contact: {
    eyebrow: "Get in touch",
    heading: "A conversation could be the next step.",
    introduction:
      "I would welcome a conversation about mentorship, an appropriate research opportunity or the next stage of supervised clinical training. If my interests connect with your work, please get in touch.",
    supporting:
      "Tell me a little about your team, the opportunity and the best way to continue the conversation.",
  },
};
